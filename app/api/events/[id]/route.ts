// API de eventos (recurso por id): GET, PUT, DELETE
// Nota Next 16: params es una Promise y debe esperarse con await
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import type { Prisma } from '@prisma/client';

type EventSnapshot = {
  title: string;
  description: string | null;
  date: Date;
  location: string | null;
};

type Change = {
  changeType: string;
  field?: string;
  oldValue?: string;
  newValue?: string;
};

// Catálogo de changeType (EventChangeLog.changeType)
// Estos son los "tipos de eventos de cambio" que se guardan en BD y también
// se imprimen en terminal cuando haces PUT /api/events/[id].
//
//  1) EVENT_UPDATED
//  2) EVENT_FIELDS_CHANGED
//  3) EVENT_RENAMED
//  4) TITLE_CHANGED
//  5) TITLE_CASE_OR_SPACING_CHANGED
//  6) TITLE_LENGTH_INCREASED
//  7) TITLE_LENGTH_DECREASED
//  8) DESCRIPTION_CHANGED
//  9) DESCRIPTION_ADDED
// 10) DESCRIPTION_REMOVED
// 11) DESCRIPTION_LENGTH_CHANGED
// 12) LOCATION_CHANGED
// 13) LOCATION_ADDED
// 14) LOCATION_REMOVED
// 15) SCHEDULE_CHANGED
// 16) DATE_CHANGED
// 17) DATE_DAY_CHANGED
// 18) DATE_YEAR_CHANGED
// 19) DATE_MONTH_CHANGED
// 20) DATE_TIME_CHANGED
// 21) DATE_MOVED_FORWARD
// 22) DATE_MOVED_BACKWARD
function buildEventChanges(before: EventSnapshot, after: EventSnapshot): Change[] {
  const changes: Change[] = [];

  // Tipos de cambio "generales" (pueden coexistir con los específicos)
  changes.push({ changeType: 'EVENT_UPDATED' });

  if (before.title !== after.title) {
    changes.push({
      changeType: 'TITLE_CHANGED',
      field: 'title',
      oldValue: before.title,
      newValue: after.title,
    });
    if (before.title.trim().toLowerCase() === after.title.trim().toLowerCase()) {
      changes.push({ changeType: 'TITLE_CASE_OR_SPACING_CHANGED', field: 'title' });
    }
    if (after.title.length > before.title.length) {
      changes.push({ changeType: 'TITLE_LENGTH_INCREASED', field: 'title' });
    }
    if (after.title.length < before.title.length) {
      changes.push({ changeType: 'TITLE_LENGTH_DECREASED', field: 'title' });
    }
    changes.push({ changeType: 'EVENT_RENAMED' });
  }

  if ((before.description || '') !== (after.description || '')) {
    const beforeDesc = before.description || '';
    const afterDesc = after.description || '';
    changes.push({
      changeType: 'DESCRIPTION_CHANGED',
      field: 'description',
      oldValue: beforeDesc,
      newValue: afterDesc,
    });
    if (!before.description && after.description) changes.push({ changeType: 'DESCRIPTION_ADDED', field: 'description' });
    if (before.description && !after.description) changes.push({ changeType: 'DESCRIPTION_REMOVED', field: 'description' });
    if (beforeDesc.length !== afterDesc.length) changes.push({ changeType: 'DESCRIPTION_LENGTH_CHANGED', field: 'description' });
  }

  if (before.location !== after.location) {
    changes.push({
      changeType: 'LOCATION_CHANGED',
      field: 'location',
      oldValue: before.location || '',
      newValue: after.location || '',
    });
    if (!before.location && after.location) changes.push({ changeType: 'LOCATION_ADDED', field: 'location' });
    if (before.location && !after.location) changes.push({ changeType: 'LOCATION_REMOVED', field: 'location' });
  }

  if (before.date.getTime() !== after.date.getTime()) {
    changes.push({
      changeType: 'DATE_CHANGED',
      field: 'date',
      oldValue: before.date.toISOString(),
      newValue: after.date.toISOString(),
    });

    // Desglose para tener "varios tipos" de cambios de fecha/hora
    if (before.date.toDateString() !== after.date.toDateString()) changes.push({ changeType: 'DATE_DAY_CHANGED', field: 'date' });
    if (before.date.getFullYear() !== after.date.getFullYear()) changes.push({ changeType: 'DATE_YEAR_CHANGED', field: 'date' });
    if (before.date.getMonth() !== after.date.getMonth()) changes.push({ changeType: 'DATE_MONTH_CHANGED', field: 'date' });
    if (
      before.date.getHours() !== after.date.getHours() ||
      before.date.getMinutes() !== after.date.getMinutes()
    ) {
      changes.push({ changeType: 'DATE_TIME_CHANGED', field: 'date' });
    }
    if (after.date.getTime() > before.date.getTime()) changes.push({ changeType: 'DATE_MOVED_FORWARD', field: 'date' });
    if (after.date.getTime() < before.date.getTime()) changes.push({ changeType: 'DATE_MOVED_BACKWARD', field: 'date' });
    changes.push({ changeType: 'SCHEDULE_CHANGED' });
  }

  // Tipos adicionales para completar el catálogo (no siempre aplican)
  if (
    before.title !== after.title ||
    (before.description || '') !== (after.description || '') ||
    before.location !== after.location ||
    before.date.getTime() !== after.date.getTime()
  ) {
    changes.push({ changeType: 'EVENT_FIELDS_CHANGED' });
  }

  return changes;
}

// GET /api/events/[id] → devuelve un evento por su id
export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const idNum = Number(id);
  if (Number.isNaN(idNum)) return NextResponse.json({ error: 'id inválido' }, { status: 400 });
  const event = await prisma.event.findUnique({ where: { id: idNum } });
  if (!event) return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
  return NextResponse.json(event);
}

// PUT /api/events/[id] → actualiza campos del evento
export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const idNum = Number(id);
    if (Number.isNaN(idNum)) return NextResponse.json({ error: 'id inválido' }, { status: 400 });
    const body = await req.json();
    const { title, description, date, location } = body;

    const before = await prisma.event.findUnique({ where: { id: idNum } });
    if (!before) return NextResponse.json({ error: 'No encontrado' }, { status: 404 });

    // Construir payload de update de forma segura:
    // - Solo setear campos si vienen en el body
    // - Para opcionales, "" se convierte en null
    const data: any = {};
    if (title !== undefined) data.title = title;
    if (description !== undefined) data.description = description ? String(description) : null;
    if (location !== undefined) data.location = location ? String(location) : null;
    if (date !== undefined) data.date = new Date(date);

    const updated = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      const u = await tx.event.update({ where: { id: idNum }, data });

      const changes = buildEventChanges(
        {
          title: before.title,
          description: before.description,
          date: before.date,
          location: before.location,
        },
        {
          title: u.title,
          description: u.description,
          date: u.date,
          location: u.location,
        }
      );

      if (changes.length > 0) {
        await tx.eventChangeLog.createMany({
          data: changes.map((c) => ({
            eventId: idNum,
            changeType: c.changeType,
            field: c.field || null,
            oldValue: c.oldValue || null,
            newValue: c.newValue || null,
          })),
        });

        // Logs visibles en terminal
        for (const c of changes) {
          console.log(
            `[EventChange] eventId=${idNum} type=${c.changeType}` +
              (c.field ? ` field=${c.field}` : '') +
              (c.oldValue !== undefined || c.newValue !== undefined ? ` old="${c.oldValue || ''}" new="${c.newValue || ''}"` : '')
          );
        }
      }

      return u;
    });

    return NextResponse.json(updated);
  } catch (e) {
    return NextResponse.json({ error: 'Error actualizando' }, { status: 500 });
  }
}

// DELETE /api/events/[id] → elimina el evento
export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const idNum = Number(id);
    if (Number.isNaN(idNum)) return NextResponse.json({ error: 'id inválido' }, { status: 400 });
    await prisma.event.delete({ where: { id: idNum } });
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: 'Error eliminando' }, { status: 500 });
  }
}

// API de eventos (colección): GET (listar) y POST (crear)
// Usa Prisma Client para consultar/insertar en PostgreSQL
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/events → lista todos los eventos ordenados por fecha ascendente
export async function GET() {
  const events = await prisma.event.findMany({ orderBy: { date: 'asc' } });
  return NextResponse.json(events);
}

// POST /api/events → crea un evento
// Body esperado: { title: string, description?: string, date: string|Date, location?: string }
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, date, location } = body;
    // Validación mínima de campos requeridos
    if (!title || !date) {
      return NextResponse.json({ error: 'title y date son requeridos' }, { status: 400 });
    }
    // Insertar registro; convertir date a Date para Prisma
    const event = await prisma.event.create({
      data: { title, description: description || null, date: new Date(date), location: location || null },
    });
    return NextResponse.json(event, { status: 201 });
  } catch (e) {
    // Manejo genérico de error servidor
    return NextResponse.json({ error: 'Error creando evento' }, { status: 500 });
  }
}

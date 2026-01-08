const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Limpiar datos previos (orden por FK)
  await prisma.eventChangeLog.deleteMany();
  await prisma.auditLog.deleteMany();
  await prisma.event.deleteMany();
  await prisma.client.deleteMany();

  // 20 eventos de ejemplo
  const base = new Date();
  const events = Array.from({ length: 20 }).map((_, i) => ({
    title: `Evento ${i + 1}`,
    description: `Descripción del evento ${i + 1}`,
    date: new Date(base.getTime() + (i + 1) * 24 * 60 * 60 * 1000),
    location: i % 2 === 0 ? `Sala ${i + 1}` : `Auditorio ${i + 1}`,
  }));

  await prisma.event.createMany({ data: events });

  // Clients de ejemplo
  const clients = await prisma.$transaction([
    prisma.client.create({ data: { name: 'Acme Corp', email: 'contacto@acme.com', phone: '+57 3000000000' } }),
    prisma.client.create({ data: { name: 'Globex', email: 'ventas@globex.com' } }),
    prisma.client.create({ data: { name: 'Initech', email: 'info@initech.com', phone: '+57 3111111111' } }),
  ]);

  // Audit logs de ejemplo para el primer cliente
  const first = clients[0];
  await prisma.auditLog.createMany({
    data: [
      {
        action: 'CREATE',
        entity: 'Client',
        entityId: first.id,
        before: null,
        after: { name: first.name, email: first.email, phone: first.phone },
        user: 'system-seed',
      },
      {
        action: 'UPDATE',
        entity: 'Client',
        entityId: first.id,
        before: { phone: first.phone },
        after: { phone: '+57 3222222222' },
        user: 'system-seed',
      },
    ],
  });

  // Reflejar el update del log en el cliente
  await prisma.client.update({ where: { id: first.id }, data: { phone: '+57 3222222222' } });

  console.log('Seed completado: 20 eventos, 3 clientes, auditoría de ejemplo.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

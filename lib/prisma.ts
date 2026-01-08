// Prisma Client singleton for Next.js
//
// En desarrollo, Next puede recargar módulos varias veces.
// Mantener una sola instancia de Prisma evita fugas de conexiones.
import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    // Activar logs básicos para depurar consultas/errores
    log: ['error', 'warn']
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

import { PrismaClient } from '@prisma/client'

declare global {
  // allow global `var` declarations
  // eslint-disable-next-line no-var
  var prisma: PrismaClient
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query', 'info', 'warn'],
  })

global.prisma = prisma
import { PrismaClient } from "@prisma/client";
export async function findOneBill(billId: string) {
  const prisma = new PrismaClient();
  const bill = await prisma.bill.findFirst({
    where: { id: billId },
    include: {
      orders: {
        select: {
          id: true,
          product: true,
          quantity: true,
        },
      },
    },
  });
  return bill;
}

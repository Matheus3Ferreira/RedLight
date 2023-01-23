import { PrismaClient } from "@prisma/client";
export async function closeBill(id: string) {
  const prisma = new PrismaClient();

  const bill = await prisma.bill.update({
    where: { id: id },
    data: {
      finished: true,
    },
    select: {
      id: true,
      finished: true,
      booking: true,
      guestId: true,
      orders: true,
      totalPrice: true,
    },
  });
  return bill;
}

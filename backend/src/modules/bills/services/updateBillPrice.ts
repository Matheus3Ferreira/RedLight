import { PrismaClient } from "@prisma/client";

export async function updateBillPrice(billId: string, totalPrice: number) {
  const prisma = new PrismaClient();
  const updatedBill = await prisma.bill.update({
    where: { id: billId },
    data: {
      totalPrice: totalPrice,
    },
  });
  return updatedBill;
}

import { Bill, PrismaClient } from "@prisma/client";
import { IBill } from "../interfaces/IBill";

export default async function createBill(bill: IBill): Promise<Bill> {
  const prisma = new PrismaClient();
  const createdBill = await prisma.bill.create({
    data: {
      finished: false,
      totalPrice: bill.totalPrice,
      guestId: bill.guestId,
    },
  });
  return createdBill;
}

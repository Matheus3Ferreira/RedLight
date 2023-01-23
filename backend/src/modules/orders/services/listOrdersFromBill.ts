import { Order, PrismaClient } from "@prisma/client";
import { IOrder } from "../interfaces/IOrder";

export async function listOrdersFromBill(
  billId: string
): Promise<Order[] | null> {
  const prisma = new PrismaClient();
  const orders = await prisma.bill.findFirst({
    where: {
      id: billId,
    },
    select: {
      orders: {
        select: {
          id: true,
          billId: true,
          product: true,
          quantity: true,
          productId: true,
        },
      },
    },
  });
  if (orders) {
    return orders.orders;
  }
  return orders;
}

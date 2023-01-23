import { Order, PrismaClient } from "@prisma/client";
import { IOrder } from "../interfaces/IOrder";

export async function createMultipleOrders(orders: IOrder[], billId: string) {
  const prisma = new PrismaClient();

  const createdOrders = await prisma.order.createMany({
    data: orders.map((order) => ({
      billId: billId,
      productId: order.productId,
      quantity: order.quantity,
    })),
  });
  return createdOrders;
}

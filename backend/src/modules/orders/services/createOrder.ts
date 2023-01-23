import { Order, PrismaClient } from "@prisma/client";
import { IOrder } from "../interfaces/IOrder";

export function createOrder(order: IOrder): Promise<Order> {
  const prisma = new PrismaClient();

  const newOrder = prisma.order.create({
    data: {
      billId: order.billId,
      productId: order.productId,
      quantity: order.quantity,
    },
  });
  return newOrder;
}

import { Bill, PrismaClient } from "@prisma/client";
import { IOrder } from "../../orders/interfaces/IOrder";
import { calculateTotalPriceOrders } from "../../orders/services/calculateTotalPriceOrders";
import { IBill } from "../interfaces/IBill";

interface IParams {
  guestId: string;
  orders: IOrder[];
}

export default async function createBill({ guestId, orders }: IParams) {
  const prisma = new PrismaClient();
  const createdBill = prisma.bill.create({
    data: {
      totalPrice: await calculateTotalPriceOrders(orders),
      guestId: guestId,
      orders: {
        create: orders.map((order) => {
          return {
            quantity: order.quantity,
            productId: order.productId,
          };
        }),
      },
    },
  });
  return await createdBill;
}

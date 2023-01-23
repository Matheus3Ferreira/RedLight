import { Request, Response } from "express";
import createBill from "../services/createBill";
import { IOrder } from "../../orders/interfaces/IOrder";
import { createMultipleOrders } from "../../orders/services/createMultipleOrders";
import { findOneBill } from "../services/findOneBill";

export default class BillController {
  public async create(req: Request, res: Response) {
    interface IRequest {
      guestId: string;
      orders: IOrder[];
    }

    // Create a bill and update with orders
    const data: IRequest = req.body;
    const totalPriceOrders: number[] = data.orders.map((order: IOrder) =>
      order.product ? order.product.price * order.quantity : 0
    );
    const totalPrice: number = totalPriceOrders.reduce(
      (sum, price) => sum + price
    );
    console.log("totalPriceOrders: " + totalPriceOrders);
    // create
    const bill = await createBill({
      guestId: data.guestId,
      totalPrice: totalPrice,
      orders: [],
    });
    // create orders
    const insertedOrders = await createMultipleOrders(data.orders, bill.id);
    const updatedBill = await findOneBill(bill.id);
    return res.status(201).json({ updatedBill });
  }
}

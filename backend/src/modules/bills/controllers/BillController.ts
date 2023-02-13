import { Request, Response } from "express";
import createBill from "../services/createBill";
import { IOrder } from "../../orders/interfaces/IOrder";
import { closeBill } from "../services/closeBill";
import { calculateTotalPriceOrders } from "../../orders/services/calculateTotalPriceOrders";

export default class BillController {
  public async create(req: Request, res: Response) {
    interface IRequest {
      orders: IOrder[];
      guestId: string;
    }
    const { orders, guestId }: IRequest = req.body;
    const totalPrice = await calculateTotalPriceOrders(orders);
    const createdBill = await createBill({
      guestId,
      orders,
    });
    return res.json({ createdBill });
  }
  public async close(req: Request, res: Response) {
    interface IRequest {
      id: string;
    }

    const { id }: IRequest = req.body;
    const billClosed = await closeBill(id);
    return res.json({ bill: billClosed });
  }
}

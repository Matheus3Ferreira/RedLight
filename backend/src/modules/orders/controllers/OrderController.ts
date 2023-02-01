import { Request, Response } from "express";

export class OrderController {
  public async create(req: Request, res: Response) {
    // // Create
    // const body: IBody = req.body;
    // const order: IOrder = {
    //   billId: body.billId as string,
    //   productId: body.productId as string,
    //   quantity: body.quantity as number,
    // };
    // const createdOrder = await createOrder(order);
    // // Calculate bill total price
    // //List orders by bill
    // const ordersFromBill = await listOrdersFromBill(order.billId);
    // //Sum all orders
    // const billNewTotalPrice = sumTotalPriceOrder(ordersFromBill as IOrder[]);
    // //Update bill
    // const updatedBill = await updateBillPrice(order.billId, billNewTotalPrice);
    // res.status(201).json({ updatedBill, createdOrder });
  }
}

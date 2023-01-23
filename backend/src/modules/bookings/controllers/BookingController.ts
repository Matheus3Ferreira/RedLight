import { Request, Response } from "express";
import createBill from "../../bills/services/createBill";
import { IProduct } from "../../products/interfaces/IProduct";
import createBooking from "../services/createBooking";

export default class BookingController {
  public async findByGuest(req: Request, res: Response) {
    const { id } = req.params;
  }

  public async create(req: Request, res: Response) {
    // const { body } = req;
    // //Gerar conta
    // const totalPrice = calculateTotalPrice(body.products);
    // const billData = {
    //   totalPrice: totalPrice,
    //   products: body.products.map((product: IProduct) => {
    //     return { id: product.id };
    //   }),
    // };
    // const bill = await createBill(billData);
    // //Registrar booking
    // const createdBooking = await createBooking(body, bill);
    // return res.json(createdBooking);
  }
}

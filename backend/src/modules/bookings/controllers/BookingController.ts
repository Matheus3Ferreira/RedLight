import { Request, Response } from "express";
import createBill from "../../bills/services/createBill";
import { IOrder } from "../../orders/interfaces/IOrder";
import { findOneProduct } from "../../products/services/findOneProduct";
import createBooking from "../services/createBooking";
import getBookDays from "../services/getBookHours";

export default class BookingController {
  public async create(req: Request, res: Response) {
    interface IRequest {
      checkIn: string;
      checkOut: string;
      guestId: string;
      productsId: string[];
    }

    const { checkIn, checkOut, guestId, productsId }: IRequest = req.body;
    // Get all rooms and products
    const productsPromises = Promise.all(
      productsId.map((id) =>
        findOneProduct({ id: id, include: { room: true } })
      )
    );

    const daysBooked = getBookDays(new Date(checkIn), new Date(checkOut));
    const orders: IOrder[] = productsId.map((id) => {
      return {
        quantity: parseInt(daysBooked.toFixed(0)), // Aumenta 1 se o checkIn e checkOut for quebrado
        productId: id,
      };
    });

    const rooms = await productsPromises.then((products) =>
      products.map((product) => {
        if (product.room === undefined || product.room === null)
          throw new Error("Invalid room");
        return product.room.id;
      })
    );

    const createdBill = await createBill({ guestId, orders });

    const booking = await createBooking({
      billId: createdBill.id,
      checkIn: new Date(checkIn),
      checkOut: new Date(checkOut),
      guestId: guestId,
      rooms: rooms,
    });

    return res.json({ createdBill, booking });

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

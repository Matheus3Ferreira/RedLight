import { Request, Response } from "express";
import moment from "moment";
import createBill from "../../bills/services/createBill";
import { IOrder } from "../../orders/interfaces/IOrder";
import { findOneProduct } from "../../products/services/findOneProduct";
import createBooking from "../services/createBooking";
import getBookDays from "../services/getBookDays";

export default class BookingController {
  public async create(req: Request, res: Response) {
    interface IRequest {
      checkIn: Date;
      checkOut: Date;
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
        quantity: daysBooked,
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
      checkIn: moment(checkIn).format(),
      checkOut: moment(checkOut).format(),
      guestId: guestId,
      rooms: rooms,
    });

    return res.json({ createdBill, booking });
  }
}

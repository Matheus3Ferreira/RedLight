import { Room } from "@prisma/client";
import { Request, Response } from "express";
import moment from "moment";
import createBill from "../../bills/services/createBill";
import { IOrder } from "../../orders/interfaces/IOrder";
import { findOneRoom } from "../../rooms/services/findOneRoom";
import createBooking from "../services/createBooking";
import getBookDays from "../services/getBookDays";

export default class BookingController {
  public async create(req: Request, res: Response) {
    interface IRequest {
      checkIn: Date;
      checkOut: Date;
      guestId: string;
      roomsId: string[];
    }

    const { checkIn, checkOut, guestId, roomsId }: IRequest = req.body;
    // Get all rooms and products
    const rooms: Room[] = await Promise.all(
      roomsId.map(
        async (id) =>
          await findOneRoom({
            id,
            include: {
              bookings: true,
              product: true,
            },
          })
      )
    );

    const daysBooked = getBookDays(new Date(checkIn), new Date(checkOut));

    const orders: IOrder[] = rooms.map((room) => {
      return {
        quantity: daysBooked,
        productId: room.productId,
      };
    });

    const createdBill = await createBill({ guestId, orders });

    const booking = await createBooking({
      billId: createdBill.id,
      checkIn: moment(checkIn).format(),
      checkOut: moment(checkOut).format(),
      guestId: guestId,
      rooms: rooms.map((room) => room.id),
    });

    return res.status(200).json(booking);
  }
}

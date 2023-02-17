import { Room } from "@prisma/client";
import { Request, Response } from "express";
import moment from "moment";
import createBill from "../../bills/services/createBill";
import { IOrder } from "../../orders/interfaces/IOrder";
import { findOneRoom } from "../../rooms/services/findOneRoom";
import { listRooms } from "../../rooms/services/listRooms";
import createBooking from "../services/createBooking";
import { disponibility } from "../services/disponibility";
import getBookDays from "../services/getBookDays";
import { listBookings } from "../services/listBookings";

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

    const orders: IOrder[] = rooms.map((room) => {
      return {
        quantity: getBookDays(new Date(checkIn), new Date(checkOut)),
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
  public async list(req: Request, res: Response) {
    const rooms = await listBookings();
    console.log(rooms);
    return res.status(200).json(rooms);
  }
  public async getAvailableRooms(req: Request, res: Response) {
    interface IRequest {
      checkIn: Date;
      checkOut: Date;
    }
    const { checkIn, checkOut } = req.body;
    const rooms = await listRooms(true);
    const availableRooms = rooms.map((room) => {
      if (disponibility({ checkIn, checkOut, bookings: room.bookings }))
        return room;
    });
    res.json(
      availableRooms === null
        ? { error: "There isn't rooms available" }
        : availableRooms
    );
  }
}

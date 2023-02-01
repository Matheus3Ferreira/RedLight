import { PrismaClient } from "@prisma/client";
import { IBill } from "../../bills/interfaces/IBill";

interface IBooking {
  guestId: string;
  checkIn: Date;
  checkOut: Date;
  billId: string;
  rooms: string[];
}

export default async function createBooking(book: IBooking) {
  const prisma = new PrismaClient();
  const newBooking = prisma.booking.create({
    data: {
      checkIn: book.checkIn,
      checkOut: book.checkOut,
      guestId: book.guestId,
      billId: book.billId,
      rooms: {
        connect: book.rooms.map((room) => {
          return { id: room };
        }),
      },
    },
  });
  return await newBooking;
}

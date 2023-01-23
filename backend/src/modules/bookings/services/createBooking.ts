import { PrismaClient } from "@prisma/client";
import { IBill } from "../../bills/interfaces/IBill";

interface IBooking {
  guestId: string;
  checkIn: string;
  checkOut: string;
  billId: string;
  rooms: string[];
}

export default function createBooking(book: IBooking, bill: IBill) {
  const prisma = new PrismaClient();
}

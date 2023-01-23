import { Room } from "@prisma/client";

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  room?: {
    id: string;
    title: string;
    numberRoom: number;
    productId: string;
    capacity: number;
    confort: {
      id: string;
      title: string;
      quantity: number;
      description: string;
    }[];
    bookings?: {
      id: string;
      billId: string;
      checkIn: Date;
      checkOut: Date;
      guestId: string;
    }[];
  };
}

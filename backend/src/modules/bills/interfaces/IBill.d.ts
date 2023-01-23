import { Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime";
import { IOrder } from "../../orders/interfaces/IOrder";

export interface IBill {
  id?: string;
  orders: IOrder[];
  totalPrice: number;
  guest?: {
    id: string;
    email: string;
  };
  guestId: string;
  booking?: Booking;
}

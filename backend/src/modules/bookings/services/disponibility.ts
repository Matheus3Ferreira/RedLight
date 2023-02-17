import { Booking, Room } from "@prisma/client";
import moment from "moment";

interface IParams {
  checkIn: Date;
  checkOut: Date;
  bookings: Booking[];
}

export function disponibility({
  checkIn,
  checkOut,
  bookings,
}: IParams): boolean {
  const disponibility = bookings.map((booking) => {
    if (
      moment(checkIn).isAfter(moment(booking.checkOut)) ||
      moment(checkOut).isBefore(moment(booking.checkIn))
    )
      return true;
    if (
      // 1° A data de checkIn conflita com a disponibilidade
      moment(checkIn).isBetween(
        moment(booking.checkIn),
        moment(booking.checkOut)
      ) ||
      // 2° A data de checkOut conflita com a disponibilidade
      moment(checkOut).isBetween(
        moment(booking.checkIn),
        moment(booking.checkOut)
      ) ||
      // 3° A data de checkIn e checkOut tenha um range maior que um booking já realizado
      moment(booking.checkIn).isBetween(moment(checkIn), moment(checkOut)) ||
      moment(booking.checkOut).isBetween(moment(checkIn), moment(checkOut))
    )
      return false;
    // 4° As datas não conflitam e retornam um quarto
    return true;
  });
  if (disponibility.includes(false)) {
    return false;
  }
  return true;
  // Data de checkIn é posterior a data de checkOut? True,
  //Data de checkOut é anterior a data de checkIn? True,
}

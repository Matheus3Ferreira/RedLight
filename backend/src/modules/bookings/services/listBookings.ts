import { PrismaClient } from "@prisma/client";

export async function listBookings() {
  const prisma = new PrismaClient();
  const bookings = await prisma.booking.findMany({
    select: {
      id: true,
      billId: true,
      checkIn: true,
      checkOut: true,
      guest: {
        select: {
          id: true,
          email: true,
        },
      },
      rooms: true,
    },
  });
  return bookings;
}

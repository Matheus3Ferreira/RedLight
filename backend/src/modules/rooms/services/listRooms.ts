import { PrismaClient } from "@prisma/client";

export async function listRooms(bookings = false, product = false) {
  const prisma = new PrismaClient();
  const rooms = await prisma.room.findMany({
    select: {
      id: true,
      title: true,
      capacity: true,
      numberRoom: true,
      productId: true,
      ConfortsOnRooms: {
        select: {
          confort: true,
          quantity: true,
        },
      },
      bookings: bookings,
      product: product,
    },
  });
  return rooms;
}

import { PrismaClient } from "@prisma/client";

export async function findOneRoom() {
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
      bookings: true,
    },
  });
  return rooms;
}

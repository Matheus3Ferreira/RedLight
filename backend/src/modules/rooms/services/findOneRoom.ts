import { PrismaClient } from "@prisma/client";

interface IParams {
  id: string;
  include?: {
    bookings?: boolean;
    ConfortsOnRooms?: boolean;
    product?: boolean;
  };
}

export async function findOneRoom({
  id,
  include = {
    bookings: false,
    ConfortsOnRooms: false,
    product: false,
  },
}: IParams) {
  const prisma = new PrismaClient();
  const room = await prisma.room.findFirstOrThrow({
    where: {
      id: id,
    },
    include: include,
  });
  return room;
}

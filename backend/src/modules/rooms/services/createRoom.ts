import { PrismaClient } from "@prisma/client";

interface IParams {
  title: string;
  capacity: number;
  numberRoom: string;
  productId: string;
  conforts: IConfort[];
}

interface IConfort {
  confortId: string;
  quantity: number;
}

export async function createRoom({
  title,
  capacity,
  numberRoom,
  productId,
  conforts,
}: IParams) {
  const prisma = new PrismaClient();
  const room = await prisma.room.create({
    data: {
      title: title,
      capacity: capacity,
      numberRoom: numberRoom,
      productId: productId,
      ConfortsOnRooms: {
        create: conforts.map((confort) => {
          return {
            confortId: confort.confortId,
            quantity: confort.quantity,
          };
        }),
      },
    },
  });
  return room;
}

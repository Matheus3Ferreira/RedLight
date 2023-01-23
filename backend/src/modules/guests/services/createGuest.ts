import { PrismaClient } from "@prisma/client";
import { IGuest } from "../controllers/GuestController";

export default async function createGuest(guest: IGuest) {
  const prisma = new PrismaClient();

  const guestCreated = await prisma.guest.create({
    data: {
      email: guest.email,
      password: guest.password,
    },
  });
  return guestCreated;
}

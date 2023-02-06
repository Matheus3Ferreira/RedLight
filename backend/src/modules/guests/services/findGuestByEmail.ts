import { PrismaClient } from "@prisma/client";

export default async function findGuestByEmail(email: string) {
  const prisma = new PrismaClient();
  const guestExists = await prisma.guest.findUnique({
    where: {
      email: email,
    },
  });
  return guestExists;
}

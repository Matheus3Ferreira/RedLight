import { PrismaClient } from "@prisma/client";

interface DataSearch {
  data: { id: string };
}

export default function findOneBooking(data: Object) {
  const prisma = new PrismaClient();
  const booking = prisma.booking.findUnique({ where: data });
}

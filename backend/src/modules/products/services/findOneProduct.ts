import { PrismaClient } from "@prisma/client";
import { IProduct } from "../interfaces/IProduct";

interface IParams {
  id: string;
  include?: {
    room?: boolean;
    _count?: boolean;
    Order?: boolean;
  };
}

export async function findOneProduct({
  id,
  include = {
    room: false,
    _count: false,
    Order: false,
  },
}: IParams): Promise<IProduct> {
  const prisma = new PrismaClient();
  const product = await prisma.product.findFirst({
    where: {
      id: id,
    },
    include: include,
  });
  if (!product) throw new Error("Product not found");
  return { ...product, price: Number(product.price) };
}

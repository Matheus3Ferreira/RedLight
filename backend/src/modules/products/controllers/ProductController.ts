import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

export default class ProductController {
  public async list(req: Request, res: Response) {
    const prisma = new PrismaClient();
    const products = await prisma.product.findMany();
    return res.json(products);
  }
}

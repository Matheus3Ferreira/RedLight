import { Request, Response } from "express";
import { IProduct } from "../interfaces/IProduct";
import { findOneProduct } from "../services/findOneProduct";

export default class ProductController {
  public async findOne(req: Request, res: Response) {
    return res.json(findOneProduct({ id: req.params.id }));
  }
}

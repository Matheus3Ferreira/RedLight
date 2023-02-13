import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { createRoom } from "../services/createRoom";

export class RoomController {
  public async list(req: Request, res: Response) {
  
  }
  public async create(req: Request, res: Response) {
    const { title, capacity, numberRoom, productId, conforts } = req.body;
    const room = await createRoom({
      title,
      capacity,
      numberRoom,
      productId,
      conforts,
    });
    return res.status(201).json(room);
  }
}

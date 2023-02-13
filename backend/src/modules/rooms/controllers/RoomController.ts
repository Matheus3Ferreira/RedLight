import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { createRoom } from "../services/createRoom";
import { listRooms } from "../services/listRooms";

export class RoomController {
  public async list(req: Request, res: Response) {
    const rooms = await listRooms();
    return res.status(200).json(rooms);
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

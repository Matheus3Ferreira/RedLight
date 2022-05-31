import { Request, response, Response } from "express";
import { Guest } from "../entity/Guest";
import { listGuestsService } from "../service/listGuestsService";


export const listGuestsController = async (req: Request, res: Response) => {
    const guests = await listGuestsService();
    return res.json(guests);
}
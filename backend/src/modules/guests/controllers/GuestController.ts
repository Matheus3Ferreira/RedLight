import { Request, Response } from "express";
import createGuest from "../services/createGuest";
import findGuestByEmail from "../services/findGuestByEmail";

export interface IGuest {
  email: string;
  password: string;
}

export class GuestController {
  public async create(req: Request, res: Response): Promise<Response> {
    const guest = req.body;
    if (await findGuestByEmail(guest.email)) {
      return res.status(400).json({ error: "Email already exists" });
    }
    const createdGuest = await createGuest(guest);

    return createdGuest instanceof Error
      ? res.status(400).json({ error: "Something wrong happened" })
      : res.status(201).json({ success: createdGuest });
  }
}

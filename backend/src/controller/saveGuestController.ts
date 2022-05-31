import { Request, Response } from "express";
import { saveGuestService } from "../service/saveGuestService";


export const saveGuestController = async (req: Request, res: Response) => {
    const { name, email, password, phone, cpf } = req.body;
    const guest = await saveGuestService({ name, email, password, phone, cpf });

    return res.json({ message: "Elemento salvo com sucesso.", guest: guest });
}
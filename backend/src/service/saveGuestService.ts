import { AppDataSource } from "../data-source";
import { Guest } from "../entity/Guest";


interface IGuestRequest {
    name: string;
    email: string;
    password: string;
    phone: string;
    cpf: string;
}

export const saveGuestService = async ({name, email, password, phone, cpf}: IGuestRequest) => {
    const guestRepository = AppDataSource.getRepository(Guest);

    const guest = guestRepository.create({ name, email, password, phone, cpf });

    await guestRepository.save(guest);

    return guest;
}
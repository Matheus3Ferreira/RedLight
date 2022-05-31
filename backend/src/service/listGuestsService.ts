import { AppDataSource } from "../data-source"
import { Guest } from "../entity/Guest"


export const listGuestsService = async () => {
    const guestsRepository = AppDataSource.getRepository(Guest);
    const guests = await guestsRepository.find();
    return guests;
} 
import { Room } from "@prisma/client";

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  room?: Room | null;
}

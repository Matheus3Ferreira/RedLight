import { IProduct } from "../../products/interfaces/IProduct";

export interface IOrder {
  id?: string;
  quantity: number;
  product?: IProduct;
  productId: string;
  billId?: string;
}

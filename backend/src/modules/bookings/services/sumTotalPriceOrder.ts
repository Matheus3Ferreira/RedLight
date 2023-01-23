import { IOrder } from "../../orders/interfaces/IOrder";

export function sumTotalPriceOrder(orders: IOrder[]) {
  const totalPrices = orders.map((order) => {
    if (order.product) return order.product.price * order.quantity;
    else return 0;
  });
  return totalPrices.reduce((sum, price) => sum + price);
}

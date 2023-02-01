import { findOneProduct } from "../../products/services/findOneProduct";
import { IOrder } from "../interfaces/IOrder";

export async function calculateTotalPriceOrders(orders: IOrder[]) {
  // Get all products
  const pricesPromises = Promise.all(
    orders.map(async (order) => await findOneProduct({ id: order.productId }))
  );
  // Convert products in orders prices
  const prices: Promise<number[]> = pricesPromises.then((prices) =>
    orders.map(
      (order) =>
        order.quantity *
        prices[prices.findIndex((price) => price.id === order.productId)].price
    )
  );

  // Return sum of orders prices
  return (await prices).reduce((sum, price) => sum + price);
}

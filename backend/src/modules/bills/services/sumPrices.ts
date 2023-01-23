export function sumPrices(prices: number[]): number {
  return prices.reduce((sum, price) => sum + price);
}

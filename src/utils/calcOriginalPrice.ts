export const originalPrice = (discount: number, price: number) => {
  return ((discount / 100) * price + price).toFixed(2);
};

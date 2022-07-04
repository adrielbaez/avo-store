import { CartItem } from "../interfaces/cart";

export const productAlreadyInCart = (
  cart: CartItem[],
  product: CartItem
): boolean => {
  const productAlreadyInCart = cart.find((item) => item.id === product.id);
  return !!productAlreadyInCart;
};

export const findProductInCart = (cart: CartItem[], product: CartItem) => {
  const productInCart = cart.find((item) => item.id === product.id);
  return productInCart;
};

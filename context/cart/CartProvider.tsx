import { FC, useReducer } from "react";
import { CartItem } from "../../interfaces/cart";
import { CartContext, cartReducer } from "./";
export interface CartState {
  cart: CartItem[];
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
};

export const CartProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);
  return (
    <CartContext.Provider value={CART_INITIAL_STATE}>
      {children}
    </CartContext.Provider>
  );
};

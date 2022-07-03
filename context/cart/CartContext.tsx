import { createContext } from "react";
import { CartItem } from "../../interfaces/cart";

interface CartContextProps {
  cart: CartItem[];
}

export const CartContext = createContext({} as CartContextProps);

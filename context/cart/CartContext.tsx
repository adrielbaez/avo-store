import { createContext } from "react";
import { CartItem } from "../../interfaces/cart";

interface CartContextProps {
  cart: CartItem[];
  //methods
  addProductToCart: (product: CartItem) => void;
  removeProductFromCart: (product: CartItem) => void;
}

export const CartContext = createContext({} as CartContextProps);

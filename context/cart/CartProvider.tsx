import { FC, useReducer } from "react";
import { CartItem } from "../../interfaces/cart";
import { productAlreadyInCart, findProductInCart } from "../../utils/products";
import { CartContext, cartReducer } from "./";
import { cartTypes } from "./types";
export interface CartState {
  cart: CartItem[];
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
};

export const CartProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

  const addProductToCart = (product: CartItem) => {
    if (!productAlreadyInCart(state.cart, product)) {
      return dispatch({ type: "[Cart]-ADD_ITEM", payload: [product] });
    }
  };
  const removeProductFromCart = (product: CartItem) => {
    const newProducts = state.cart.filter(
      (productCurrent) => productCurrent.id !== product.id
    );
    return dispatch({ type: "[Cart]-REMOVE_ITEM", payload: newProducts });
  };

  const modifyQuantity = (productID: string, quantity: number) => {
    const productToUpdate = state.cart.map((productCurrent) => {
      if (productCurrent.id === productID) {
        return { ...productCurrent, quantity: quantity };
      }
      return productCurrent;
    });

    return dispatch({ type: "[Cart]-UPDATE_ITEM", payload: productToUpdate });
  };
  return (
    <CartContext.Provider
      value={{
        ...state,
        //methods
        addProductToCart,
        removeProductFromCart,
        modifyQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

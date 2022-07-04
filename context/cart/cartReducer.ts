import { CartState } from "./";
import { CartItem } from "../../interfaces/cart/cartInterface";
import { cartTypes } from "./types";

type CartActionType =
  | { type: "[Cart]-ADD_ITEM"; payload: CartItem[] }
  | { type: "[Cart]-REMOVE_ITEM"; payload: CartItem[] }
  | { type: "[Cart]-UPDATE_ITEM"; payload: CartItem[] };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case cartTypes.ADD_ITEM:
      return {
        ...state,
        cart: [...state.cart, ...action.payload],
      };
    case cartTypes.REMOVE_ITEM:
      return {
        ...state,
        cart: [...action.payload],
      };
    case cartTypes.UPDATE_ITEM:
      return {
        ...state,
        cart: [...action.payload],
      };

    default:
      return state;
  }
};

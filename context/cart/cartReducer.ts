import { CartState } from "./";
import { CartItem } from "../../interfaces/cart/cartInterface";

type CartActionType = { type: "[Cart]-ADD_ITEM"; payload: CartItem };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "[Cart]-ADD_ITEM":
      return {
        ...state,
      };

    default:
      return state;
  }
};

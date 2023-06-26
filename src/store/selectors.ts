import { RootState } from "./store";

export const getCartTotalAmount = (state: RootState) => {
  return state.cart.totalAmount;
};

export const getCartItemAmount = (state: RootState, id: string) => {
  return state.cart.items[id]?.amount ?? 0;
};

export const getCartItems = (state: RootState) => {
  return Object.values(state.cart.items);
};

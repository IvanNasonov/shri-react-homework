import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  imageSrc: string;
  title: string;
  genre: string;
  amount: number;
};

type CartState = {
  totalAmount: number;
  items: Record<string, CartItem>;
};

type IncrementPayload = Omit<CartItem, "amount">;
type DecrementPayload = { id: string };
type DeletePayload = { id: string };

const initialState: CartState = {
  totalAmount: 0,
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<IncrementPayload>) => {
      if (state.totalAmount >= 30) return;

      state.totalAmount += 1;

      const cartItem = state.items[action.payload.id];

      if (cartItem) {
        cartItem.amount += 1;
        return;
      }

      state.items[action.payload.id] = {
        ...action.payload,
        amount: 1,
      };
    },
    decrement: (state, action: PayloadAction<DecrementPayload>) => {
      state.totalAmount -= 1;

      const cartItem = state.items[action.payload.id];

      if (cartItem.amount === 1) {
        delete state.items[action.payload.id];
        return;
      }

      cartItem.amount -= 1;
    },
    delete: (state, action: PayloadAction<DeletePayload>) => {
      state.totalAmount -= state.items[action.payload.id].amount;
      delete state.items[action.payload.id];
    },
  },
});

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

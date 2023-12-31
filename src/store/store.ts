import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "./api";
import { cartReducer } from "./cartSlice";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(moviesApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

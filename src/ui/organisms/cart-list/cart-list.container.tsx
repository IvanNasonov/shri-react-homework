"use client";
import { useDispatch, useSelector } from "react-redux";

import { getCartItems } from "@store/selectors";
import { cartActions } from "@store/cartSlice";

import { CartList } from "./cart-list";

export const CartListContainer = () => {
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  const deleteItem = (id: string) => {
    dispatch(cartActions.delete({ id }));
  };

  return <CartList items={cartItems} deleteItem={deleteItem} />;
};

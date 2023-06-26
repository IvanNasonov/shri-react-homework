"use client";

import { useSelector } from "@lib";
import { getCartTotalAmount } from "@store/selectors";
import { CartButton } from "./cart-button";

export const CartButtonContainer = () => {
  const cartAmount = useSelector(getCartTotalAmount);

  return <CartButton cartAmount={cartAmount} />;
};

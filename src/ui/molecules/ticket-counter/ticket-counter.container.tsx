"use client";
import { getCartItemAmount, getCartTotalAmount } from "@store/selectors";
import { useDispatch, useSelector } from "@lib";

import { TicketCounter } from "./ticket-counter";
import { cartActions } from "@store/cartSlice";
type Props = {
  id: string;
  imageSrc: string;
  title: string;
  genre: string;
};

export const TicketCounterContainer = ({
  id,
  genre,
  imageSrc,
  title,
}: Props) => {
  const totalAmount = useSelector(getCartTotalAmount);
  const amount = useSelector((state) => getCartItemAmount(state, id));
  const dispatch = useDispatch();

  const increment = () =>
    dispatch(cartActions.increment({ id, genre, imageSrc, title }));

  const decrement = () => dispatch(cartActions.decrement({ id }));

  return (
    <TicketCounter
      amount={amount}
      totalAmount={totalAmount}
      decrement={decrement}
      increment={increment}
      canIncrement={totalAmount < 30}
      canDecrement={amount > 0}
    />
  );
};

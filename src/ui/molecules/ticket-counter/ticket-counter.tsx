"use client";

import styles from "./ticket-counter.module.css";

import { AmountButton } from "../../atoms";
import { Title } from "../../typography";

type Props = { increment: () => void; decrement: () => void; amount: number };

export const TicketCounter = ({ increment, decrement, amount }: Props) => {
  return (
    <div className={styles.container}>
      <AmountButton
        type={"decrement"}
        isEnabled={amount > 0}
        onClick={increment}
      />
      <Title>{amount}</Title>
      <AmountButton
        type={"increment"}
        isEnabled={amount < 30}
        onClick={increment}
      />
    </div>
  );
};

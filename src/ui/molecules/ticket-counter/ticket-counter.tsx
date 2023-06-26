"use client";

import styles from "./ticket-counter.module.css";

import { AmountButton } from "../../atoms";
import { Title } from "../../typography";
import React from "react";

type Props = {
  amount: number;
  totalAmount: number;
  canIncrement: boolean;
  canDecrement: boolean;
  increment: () => void;
  decrement: () => void;
};

export const TicketCounter = React.memo(function TicketCounter({
  increment,
  decrement,
  amount,
  canDecrement,
  canIncrement,
}: Props) {
  return (
    <div className={styles.container}>
      <AmountButton
        type={"decrement"}
        isEnabled={canDecrement}
        onClick={decrement}
      />
      <Title>{amount}</Title>
      <AmountButton
        type={"increment"}
        isEnabled={canIncrement}
        onClick={increment}
      />
    </div>
  );
});

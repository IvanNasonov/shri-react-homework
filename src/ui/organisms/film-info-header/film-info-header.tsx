import styles from "./film-info-header.module.css";

import React from "react";

import { Title } from "@ui/typography";
import { TicketCounter } from "@ui/molecules";

type Props = {
  title: string;
  ticketAmount: number;
  increment: () => void;
  decrement: () => void;
};

export const FilmInfoHeader = ({
  decrement,
  increment,
  ticketAmount,
  title,
}: Props) => {
  return (
    <div className={styles.container}>
      <Title large>{title}</Title>
      <TicketCounter
        amount={ticketAmount}
        decrement={decrement}
        increment={increment}
      />
    </div>
  );
};

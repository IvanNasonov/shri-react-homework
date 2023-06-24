"use client";
import styles from "./film-card.module.css";

import { Title, Text } from "../../typography";
import { FilmPoster } from "../../atoms";
import { TicketCounter } from "../../molecules";

type Props = {
  imageSrc: string;
  title: string;
  genre: string;
};

export const FilmCard = ({ genre, imageSrc, title }: Props) => {
  return (
    <section className={styles.container}>
      <FilmPoster src={imageSrc} filmTitle={title} />
      <div className={styles.textContainer}>
        <Title>{title}</Title>
        <Text italic>{genre}</Text>
      </div>

      <TicketCounter amount={0} decrement={() => null} increment={() => null} />
    </section>
  );
};

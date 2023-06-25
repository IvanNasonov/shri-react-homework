"use client";
import styles from "./film-card.module.css";

import { Title, Text } from "../../typography";
import { CloseButton, FilmPoster } from "../../atoms";
import { TicketCounter } from "../../molecules";
import Link from "next/link";
import { IconClose } from "@ui/icons";

type Props = {
  imageSrc: string;
  title: string;
  genre: string;
  withDeleteButton?: boolean;
  onDeletePress?: () => void;
};

export const FilmCard = ({
  genre,
  imageSrc,
  title,
  withDeleteButton,
  onDeletePress,
}: Props) => {
  return (
    <section className={styles.container}>
      <FilmPoster src={imageSrc} filmTitle={title} />
      <div className={styles.textContainer}>
        <Link href="/film/69">
          <Title>{title}</Title>
        </Link>
        <Text italic>{genre}</Text>
      </div>

      <TicketCounter amount={0} decrement={() => null} increment={() => null} />
      {withDeleteButton && onDeletePress ? (
        <CloseButton onClick={onDeletePress} />
      ) : null}
    </section>
  );
};

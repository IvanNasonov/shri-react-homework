"use client";
import styles from "./film-card.module.css";

import Link from "next/link";

import { Title, Text } from "../../typography";
import { CloseButton, FilmPoster } from "../../atoms";
import { TicketCounterContainer } from "../../molecules";

type Props = {
  id: string;
  imageSrc: string;
  title: string;
  genre: string;
  withDeleteButton?: boolean;
  onDeletePress?: (id: string) => void;
};

export const FilmCard = ({
  id,
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
        <Link href={`/film/${id}`}>
          <Title>{title}</Title>
        </Link>
        <Text italic>{genre}</Text>
      </div>

      <TicketCounterContainer
        genre={genre}
        id={id}
        imageSrc={imageSrc}
        title={title}
      />
      {withDeleteButton && onDeletePress ? (
        <CloseButton onClick={() => onDeletePress(id)} />
      ) : null}
    </section>
  );
};

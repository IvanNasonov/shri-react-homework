import styles from "./movies-list.module.css";

import { FilmCard } from "../film-card/film-card";

import { FilmCard as FilmCardType } from "@types";

type Props = {
  items: FilmCardType[];
  withDeleteButton?: boolean;
  onDeletePress?: () => void;
};

export const MoviesList = ({
  items,
  withDeleteButton,
  onDeletePress,
}: Props) => {
  return (
    <ul className={styles.list}>
      {items.map((film) => {
        return (
          <FilmCard
            genre={film.genre}
            imageSrc={film.imageSrc}
            title={film.title}
            key={film.id}
            withDeleteButton={withDeleteButton}
            onDeletePress={onDeletePress}
          />
        );
      })}
    </ul>
  );
};

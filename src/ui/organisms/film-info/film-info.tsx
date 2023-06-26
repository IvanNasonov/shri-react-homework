"use client";
import styles from "./film-info.module.css";

import { FilmPoster } from "@ui/atoms";
import { FilmInfoHeader } from "../film-info-header/film-info-header";
import { Title, Text } from "@ui/typography";

type Props = {
  id: string;
  imageSrc: string;
  title: string;
  genre: string;
  releaseYear: number;
  rating: number;
  description: string;
  director: string;
};

export const FilmInfo = ({
  description,
  genre,
  rating,
  releaseYear,
  director,
  title,
  imageSrc,
  id,
}: Props) => {
  return (
    <section className={styles.container}>
      <FilmPoster filmTitle={title} src={imageSrc} large />
      <div className={styles.infoContainer}>
        <FilmInfoHeader
          title={title}
          id={id}
          genre={genre}
          imageSrc={imageSrc}
        />
        <div className={styles.infoGroup}>
          <span className={styles.infoCategory}>
            <Title className={styles.infoTitle}>Жанр:</Title>
            <Text large>{genre}</Text>
          </span>
          <span className={styles.infoCategory}>
            <Title className={styles.infoTitle}>Год выпуска:</Title>
            <Text large>{releaseYear}</Text>
          </span>
          <span className={styles.infoCategory}>
            <Title className={styles.infoTitle}> Рейтинг:</Title>
            <Text large>{rating}</Text>
          </span>
          <span className={styles.infoCategory}>
            <Title className={styles.infoTitle}> Режиссер:</Title>
            <Text large>{director}</Text>
          </span>
        </div>

        <Title className={styles.descriptionTitle}>Описание</Title>

        <Text medium>{description}</Text>
      </div>
    </section>
  );
};

import styles from "./film-info-header.module.css";

import React from "react";

import { Title } from "@ui/typography";
import { TicketCounterContainer } from "@ui/molecules";

type Props = {
  id: string;
  imageSrc: string;
  genre: string;
  title: string;
};

export const FilmInfoHeader = ({ title, genre, id, imageSrc }: Props) => {
  return (
    <div className={styles.container}>
      <Title large>{title}</Title>
      <TicketCounterContainer
        id={id}
        genre={genre}
        imageSrc={imageSrc}
        title={title}
      />
    </div>
  );
};

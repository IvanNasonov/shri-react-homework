import styles from "./accordion-item.module.css";

import React from "react";

import { IconArrow } from "@ui/icons";
import { Title, Text } from "@ui/typography";

type Props = {
  title: string;
  text: string;
  isOpen: boolean;
  onClickHeader: () => void;
};

export const AccordionItem = ({
  isOpen,
  text,
  title,
  onClickHeader,
}: Props) => {
  return (
    <article className={styles.container}>
      <div className={styles.header} onClick={onClickHeader}>
        <Title>{title}</Title>
        <IconArrow />
      </div>
      {isOpen ? (
        <Text medium className={styles.text}>
          {text}
        </Text>
      ) : null}
    </article>
  );
};

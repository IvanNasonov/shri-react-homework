"use client";
import { AccordionItem } from "@ui/molecules";
import styles from "./accodion.module.css";

import { useState } from "react";

type Props = {
  items: Array<{ title: string; text: string }>;
};

export const Accordion = ({ items }: Props) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  return (
    <section className={styles.list}>
      {items.map((item) => {
        const { text, title } = item;
        const isOpen = openItem === title;
        const onClick = () => {
          if (isOpen) {
            setOpenItem(null);
            return;
          }
          setOpenItem(title);
        };

        return (
          <AccordionItem
            title={title}
            text={text}
            isOpen={isOpen}
            key={title}
            onClickHeader={onClick}
          />
        );
      })}
    </section>
  );
};

"use client";
import styles from "./cart-list.module.css";

import { useState } from "react";
import { createPortal } from "react-dom";

import { FilmCard } from "@types";
import { CartTotal } from "@ui/atoms";
import { Modal } from "@ui/molecules";

import { MoviesList } from "../movies-list/movies-list";
import { Title } from "@ui/typography";

type Props = {
  items: FilmCard[];
  deleteItem: (id: string) => void;
};

export const CartList = ({ items, deleteItem }: Props) => {
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const closeModal = () => {
    setItemToDelete(null);
  };

  const openModal = (id: string) => {
    setItemToDelete(id);
  };

  const onConfirm = () => {
    if (itemToDelete) {
      deleteItem(itemToDelete);
    }
    setItemToDelete(null);
  };

  if (items.length === 0) {
    return (
      <div className={styles.stub}>
        <Title large color="#999FA6">
          Здесь пока ничего нет :)
        </Title>
      </div>
    );
  }

  return (
    <>
      <MoviesList items={items} withDeleteButton onDeletePress={openModal} />
      <CartTotal />
      {itemToDelete !== null
        ? createPortal(
            <Modal
              title="Удаление билетов"
              text="Вы уверены, что хотите удалить билет?"
              onClosePress={closeModal}
              onDecline={closeModal}
              onConfirm={onConfirm}
            />,
            document.body
          )
        : null}
    </>
  );
};

"use client";

import { FilmCard } from "@types";

import { MoviesList } from "../movies-list/movies-list";
import { CartTotal } from "@ui/atoms";
import { Modal } from "@ui/molecules";
import { useState } from "react";
import { createPortal } from "react-dom";

type Props = {
  items: FilmCard[];
};

export const CartList = ({ items }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <MoviesList items={items} withDeleteButton onDeletePress={openModal} />
      <CartTotal ticketsAmount={7} />
      {isModalOpen
        ? createPortal(
            <Modal
              title="Удаление билетов"
              text="Вы уверены, что хотите удалить билет?"
              onClosePress={closeModal}
              onDecline={closeModal}
              onConfirm={() => console.log("yes")}
            />,
            document.body
          )
        : null}
    </>
  );
};

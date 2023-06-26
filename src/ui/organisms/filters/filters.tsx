"use client";

import styles from "./filters.module.css";

import { useState } from "react";

import { useGetCinemasQuery } from "@store/api";

import { InputField, Loader } from "../../atoms";
import { FormField } from "../../templates";
import { Text } from "../../typography";
import { Dropdown } from "../dropdown/dropdown";
import { Cinema } from "@store/types";
import { DropdownItem } from "@types";

type Props = {
  isLoading: boolean;
  cinemas: Cinema[] | undefined;
  genres: DropdownItem[] | undefined;
};

export const Filters = ({ isLoading, cinemas, genres }: Props) => {
  const [filmTitle, setFilmTitle] = useState("");

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Text bold className={styles.title}>
            Фильтры поиска
          </Text>
          <FormField
            label="Название"
            InputComponent={
              <InputField text={filmTitle} setText={setFilmTitle} />
            }
          />
          {genres ? (
            <FormField
              label="Жанр"
              InputComponent={
                <Dropdown
                  selectedItem={null}
                  items={genres}
                  setSelectedItem={(item) => console.log(item)}
                  placeholderText="Выберите жанр"
                />
              }
            />
          ) : null}
          {cinemas ? (
            <FormField
              label="Кинотеатр"
              InputComponent={
                <Dropdown
                  selectedItem={null}
                  items={cinemas}
                  setSelectedItem={(item) => console.log(item)}
                  placeholderText="Выберите кинотеатр"
                />
              }
            />
          ) : null}
        </>
      )}
    </div>
  );
};

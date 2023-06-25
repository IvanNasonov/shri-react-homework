"use client";
import styles from "./filters.module.css";

import { useState } from "react";

import { InputField } from "../../atoms";
import { FormField } from "../../templates";
import { Text } from "../../typography";
import { Dropdown } from "../dropdown/dropdown";

export const Filters = () => {
  const [filmTitle, setFilmTitle] = useState("");

  return (
    <div className={styles.container}>
      <Text bold className={styles.title}>
        Фильтры поиска
      </Text>
      <FormField
        label="Название"
        InputComponent={<InputField text={filmTitle} setText={setFilmTitle} />}
      />
      <FormField
        label="Жанр"
        InputComponent={
          <Dropdown
            selectedItem={null}
            items={["Фентези", "Хоррор", "Боевик"]}
            setSelectedItem={(item) => console.log(item)}
            placeholderText="Выберите жанр"
          />
        }
      />
      <FormField
        label="Кинотеатр"
        InputComponent={
          <Dropdown
            selectedItem={null}
            items={["Дордой", "Бишкек парк", "Синематика"]}
            setSelectedItem={(item) => console.log(item)}
            placeholderText="Выберите кинотеатр"
          />
        }
      />
    </div>
  );
};

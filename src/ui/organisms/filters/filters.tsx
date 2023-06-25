"use client";
import { useState } from "react";

import { InputField } from "../../atoms";
import { FormField } from "../../templates";
import { Dropdown } from "../dropdown/dropdown";

export const Filters = () => {
  const [filmTitle, setFilmTitle] = useState("");

  return (
    <>
      <FormField
        label="Название"
        InputComponent={<InputField text={filmTitle} setText={setFilmTitle} />}
      />
      <FormField
        label="Жанр"
        InputComponent={
          <Dropdown
            selectedItem="ghbdtn"
            items={["Фентези", "Хоррор", "Боевик"]}
            setSelectedItem={(item) => console.log(item)}
          />
        }
      />
    </>
  );
};

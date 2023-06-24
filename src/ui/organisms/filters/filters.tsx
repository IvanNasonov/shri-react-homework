"use client";

import { InputField } from "../../atoms";
import { FormField } from "../../templates";
import { useState } from "react";

export const Filters = () => {
  const [filmTitle, setFilmTitle] = useState("");

  return (
    <>
      <FormField
        label="Название"
        InputComponent={<InputField text={filmTitle} setText={setFilmTitle} />}
      />
    </>
  );
};

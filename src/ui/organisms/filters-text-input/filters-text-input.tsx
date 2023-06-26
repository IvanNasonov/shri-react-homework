"use client";
import { useContext } from "react";

import { InputField } from "@ui/atoms";
import { FormField } from "@ui/templates";
import { TitleFilterSetterContext, TitleFilterValueContext } from "@lib";

export const FiltersTextInput = () => {
  const filmTitle = useContext(TitleFilterValueContext);
  const setFilmTitle = useContext(TitleFilterSetterContext);

  return (
    <FormField
      label="Название"
      InputComponent={<InputField setText={setFilmTitle} />}
    />
  );
};

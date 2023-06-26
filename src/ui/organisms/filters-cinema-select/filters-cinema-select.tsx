"use client";
import { useContext } from "react";

import { FormField } from "@ui/templates";
import { CinemaFilterSetterContext, CinemaFilterValueContext } from "@lib";
import { DropdownItem } from "@types";

import { Dropdown } from "../dropdown/dropdown";
import { useGetCinemasQuery } from "@store/api";

type Props = {
  cinemas: DropdownItem[];
};

export const FiltersCinemaSelect = ({ cinemas }: Props) => {
  const { isFetching } = useGetCinemasQuery(undefined);
  const cinema = useContext(CinemaFilterValueContext);
  const setCinema = useContext(CinemaFilterSetterContext);

  return (
    <FormField
      label="Кинотеатр"
      InputComponent={
        <Dropdown
          isLoading={isFetching}
          selectedItem={cinema?.name ?? null}
          items={cinemas}
          setSelectedItem={setCinema}
          placeholderText="Выберите кинотеатр"
        />
      }
    />
  );
};

"use client";
import { useContext } from "react";

import { FormField } from "@ui/templates";
import {
  CinemaFilterValueContext,
  GenreFilterSetterContext,
  GenreFilterValueContext,
} from "@lib";
import { DropdownItem } from "@types";

import { Dropdown } from "../dropdown/dropdown";
import { useGetMoviesQuery } from "@store/api";

type Props = {
  genres: DropdownItem[];
};

export const FiltersGenreSelect = ({ genres }: Props) => {
  const cinema = useContext(CinemaFilterValueContext);
  const filmGenre = useContext(GenreFilterValueContext);
  const setFilmGenre = useContext(GenreFilterSetterContext);
  const { isFetching } = useGetMoviesQuery(cinema?.id);

  return (
    <FormField
      label="Жанр"
      InputComponent={
        <Dropdown
          isLoading={isFetching}
          selectedItem={filmGenre?.name ?? null}
          items={genres}
          setSelectedItem={setFilmGenre}
          placeholderText="Выберите жанр"
        />
      }
    />
  );
};

"use client";
import styles from "./filters.module.css";

import { Cinema } from "@store/types";
import { DropdownItem } from "@types";

import { Loader } from "../../atoms";
import { Text } from "../../typography";
import { FiltersTextInput } from "../filters-text-input/filters-text-input";
import { FiltersGenreSelect } from "../filters-genre-select/filters-genre-select";
import { FiltersCinemaSelect } from "../filters-cinema-select/filters-cinema-select";

type Props = {
  isLoading: boolean;
  cinemas: Cinema[] | undefined;
  genres: DropdownItem[] | undefined;
};

export const Filters = ({ isLoading, cinemas, genres }: Props) => {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Text bold className={styles.title}>
            Фильтры поиска
          </Text>
          <FiltersTextInput />
          {genres ? <FiltersGenreSelect genres={genres} /> : null}
          {cinemas ? <FiltersCinemaSelect cinemas={cinemas} /> : null}
        </>
      )}
    </div>
  );
};

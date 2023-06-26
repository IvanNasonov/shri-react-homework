"use client";

import { useGetCinemasQuery, useGetMoviesQuery } from "@store/api";
import { DropdownItem } from "@types";
import { CACHE_TIME } from "@constants";

import { Filters } from "./filters";
import { CinemaFilterValueContext, getTranslatedGenre } from "../../../lib";
import { useContext } from "react";

export const FiltersContainer = () => {
  const cinema = useContext(CinemaFilterValueContext);

  const { data: cinemas, isLoading: isLoadingCinemas } =
    useGetCinemasQuery(undefined);

  const { genres, isLoadingGenres } = useGetMoviesQuery(cinema?.id, {
    pollingInterval: CACHE_TIME,
    selectFromResult: (result) => {
      return {
        isLoadingGenres: result.isLoading,
        genres: result.data?.reduce<DropdownItem[]>((acc, curr) => {
          const currentGenre = getTranslatedGenre(curr.genre);

          if (acc.some((item) => item.name === currentGenre)) {
            return acc;
          }

          acc.push({
            name: currentGenre,
          });

          return acc;
        }, []),
      };
    },
  });

  return (
    <Filters
      cinemas={cinemas}
      isLoading={isLoadingCinemas || isLoadingGenres}
      genres={genres}
    />
  );
};

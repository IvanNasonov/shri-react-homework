"use client";

import { useGetCinemasQuery, useGetMoviesQuery } from "@store/api";
import { DropdownItem } from "@types";
import { CACHE_TIME } from "@constants";

import { Filters } from "./filters";
import { getTranslatedGenre } from "../../../lib";

export const FiltersContainer = () => {
  const { data: cinemas, isLoading: isLoadingCinemas } = useGetCinemasQuery(
    undefined,
    {
      pollingInterval: CACHE_TIME,
    }
  );

  const { genres, isLoadingGenres } = useGetMoviesQuery(undefined, {
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
      isLoading={isLoadingCinemas || isLoadingCinemas}
      genres={genres}
    />
  );
};

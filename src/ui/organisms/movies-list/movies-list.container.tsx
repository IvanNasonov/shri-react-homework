"use client";

import React from "react";
import { useGetMoviesQuery } from "@store/api";

import { Loader } from "@ui/atoms";
import { CACHE_TIME } from "@constants";

import { MoviesList } from "./movies-list";
import { getTranslatedGenre } from "../../../lib";

export const MoviesListContainer = () => {
  const { movies, isLoading } = useGetMoviesQuery(undefined, {
    pollingInterval: CACHE_TIME,
    selectFromResult: (data) => {
      return {
        isLoading: data.isLoading,
        movies: data.data?.map(({ genre, title, id, posterUrl }) => {
          return {
            title,
            id,
            genre: getTranslatedGenre(genre),
            imageSrc: posterUrl,
          };
        }),
      };
    },
  });

  if (isLoading) return <Loader />;

  if (!movies) return null;

  return <MoviesList items={movies} />;
};

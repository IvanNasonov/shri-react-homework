"use client";

import React, { useContext, useMemo } from "react";
import { useGetMoviesQuery } from "@store/api";

import { Loader } from "@ui/atoms";
import {
  TitleFilterValueContext,
  GenreFilterValueContext,
  getTranslatedGenre,
  CinemaFilterValueContext,
} from "@lib";

import { MoviesList } from "./movies-list";

export const MoviesListContainer = () => {
  const filmTitle = useContext(TitleFilterValueContext);
  const filmGenre = useContext(GenreFilterValueContext);
  const cinema = useContext(CinemaFilterValueContext);

  const { movies, isLoading, isFetching } = useGetMoviesQuery(cinema?.id, {
    selectFromResult: (data) => {
      return {
        isLoading: data.isLoading,
        isFetching: data.isFetching,
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

  const filteredMovies = useMemo(() => {
    return movies?.filter((movie) => {
      if (!filmGenre && filmTitle) {
        return true;
      }

      const matchesTitle = filmTitle
        ? movie.title.toLowerCase().includes(filmTitle.toLowerCase())
        : true;

      const matchesGenre = filmGenre ? movie.genre === filmGenre.name : true;

      return matchesGenre && matchesTitle;
    });
  }, [movies, filmGenre, filmTitle]);

  if (isLoading || isFetching) return <Loader />;

  if (!filteredMovies) return null;

  return <MoviesList items={filteredMovies} />;
};

"use client";

import { useGetMovieByIdQuery } from "@store/api";
import { Loader } from "@ui/atoms";

import { FilmInfo } from "./film-info";
import { getTranslatedGenre } from "../../../lib";

type Props = {
  id: string;
};

export const FilmInfoContainer = ({ id }: Props) => {
  const { data, isLoading } = useGetMovieByIdQuery(id);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) return null;

  return (
    <FilmInfo
      description={data.description}
      director={data.director}
      genre={getTranslatedGenre(data.genre)}
      imageSrc={data.posterUrl}
      rating={data.rating}
      releaseYear={data.releaseYear}
      title={data.title}
    />
  );
};

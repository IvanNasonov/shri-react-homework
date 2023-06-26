import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Movie, Cinema, Review } from "./types";

export const moviesApi = createApi({
  reducerPath: "movies",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getCinemas: builder.query<Cinema[], undefined>({
      query: () => ({ method: "GET", url: "/cinemas" }),
    }),
    getMovies: builder.query<Movie[], string | undefined>({
      query: (query) => ({
        method: "GET",
        url: `/movies${query ? `/cinemaId=${query}` : ""}`,
      }),
    }),
    getMovieById: builder.query<Movie, string>({
      query: (query) => ({
        method: "GET",
        url: `/movie?movieId=${query}`,
      }),
    }),
    getReviewsForMovie: builder.query<Review[], string>({
      query: (query) => ({
        method: "GET",
        url: `/reviews?movieId=${query}`,
      }),
    }),
  }),
});

export const {
  useGetCinemasQuery,
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useGetReviewsForMovieQuery,
} = moviesApi;

export type Cinema = {
  id: string;
  name: string;
  movieIds: string[];
};

export type Movie = {
  description: string;
  director: string;
  genre: string;
  id: string;
  posterUrl: string;
  rating: number;
  releaseYear: number;
  reviewIds: string[];
  title: string;
};

export type Review = {
  id: string;
  name: string;
  rating: number;
  text: string;
  avatarUrl?: string;
};

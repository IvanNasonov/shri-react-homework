"use client";

import { useGetReviewsForMovieQuery } from "@store/api";
import { ReviewsList } from "./reviews-list";
import { Loader } from "@ui/atoms";

type Props = {
  id: string;
};

export const ReviewsListContainer = ({ id }: Props) => {
  const { data, isLoading } = useGetReviewsForMovieQuery(id);

  if (isLoading) return <Loader />;

  if (!data) return null;

  return <ReviewsList reviews={data} />;
};

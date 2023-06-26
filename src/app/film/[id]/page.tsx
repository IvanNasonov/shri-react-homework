import { ReviewsListContainer, FilmInfoContainer } from "@ui/organisms";

const Film = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <FilmInfoContainer id={params.id} />
      <ReviewsListContainer id={params.id} />
    </>
  );
};

export default Film;

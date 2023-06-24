import { FilmCard, Filters } from "@ui/organisms";

const Main = () => {
  return (
    <>
      <FilmCard
        genre="Фентези"
        title="Властелин колец: Братство кольца"
        imageSrc="https://i.postimg.cc/pdCLNMqX/1.webp"
      />
      <Filters />
    </>
  );
};

export default Main;

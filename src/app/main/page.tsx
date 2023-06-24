import { Roboto } from "next/font/google";
import { Title, Text } from "@ui/typography";
import { FilmCard } from "@/ui/organisms";

const roboto = Roboto({
  weight: "700",
  subsets: ["cyrillic"],
});

const Main = () => {
  return (
    <>
      <FilmCard
        genre="Фентези"
        title="Властелин колец: Братство кольца"
        imageSrc="https://i.postimg.cc/pdCLNMqX/1.webp"
      />
    </>
  );
};

export default Main;

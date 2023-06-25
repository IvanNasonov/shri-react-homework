import styles from "./film-poster.module.css";

import Image from "next/image";

type Props = {
  src: string;
  filmTitle?: string;
  large?: boolean;
};

export const FilmPoster = ({ src, filmTitle, large }: Props) => {
  return (
    <Image
      src={src}
      width={large ? 400 : 100}
      height={large ? 500 : 120}
      alt={`Постер фильма${filmTitle ? " " + filmTitle : ""}`}
      style={{
        borderRadius: 8,
        objectFit: "cover",
      }}
    />
  );
};

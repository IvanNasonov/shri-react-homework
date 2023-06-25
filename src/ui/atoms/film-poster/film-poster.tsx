import styles from "./film-poster.module.css";

import Image from "next/image";

type Props = {
  src: string;
  filmTitle?: string;
};

export const FilmPoster = ({ src, filmTitle }: Props) => {
  return (
    <Image
      src={src}
      width={100}
      height={120}
      alt={`Постер фильма${filmTitle ? " " + filmTitle : ""}`}
      style={{
        borderRadius: 8,
        objectFit: "cover",
        width: "auto",
        height: "auto",
      }}
    />
  );
};

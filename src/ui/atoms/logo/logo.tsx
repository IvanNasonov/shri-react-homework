import styles from "./logo.module.css";

import classNames from "classnames";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "700",
  subsets: ["cyrillic"],
});

export const Logo = () => {
  return (
    <h1 className={classNames(roboto.className, styles.logo)}>Билетопоиск</h1>
  );
};

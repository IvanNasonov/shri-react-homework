import styles from "./footer.module.css";

import Link from "next/link";
import { Roboto } from "next/font/google";
import classNames from "classnames";

const roboto = Roboto({
  weight: "300",
  subsets: ["cyrillic"],
});

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <Link href={"/q-and-a"} className={styles.link}>
        <p className={classNames(roboto.className, styles.text)}>
          Вопросы-ответы
        </p>
      </Link>
      <Link href={"/about"} className={styles.link}>
        <p className={classNames(roboto.className, styles.text)}>О нас</p>
      </Link>
    </footer>
  );
};

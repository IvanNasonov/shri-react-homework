import { Roboto } from "next/font/google";
import styles from "./text.module.css";
import classNames from "classnames";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: "400",
});

type Props = {
  children: string;
  italic?: boolean;
};

export const Text = ({ children, italic }: Props) => {
  return (
    <p
      className={classNames(
        styles.text,
        roboto.className,
        italic ? styles.italic : undefined
      )}
    >
      {children}
    </p>
  );
};

import { Roboto } from "next/font/google";
import styles from "./text.module.css";
import classNames from "classnames";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

type Props = {
  children: string;
  className: string;
  italic?: boolean;
  bold?: boolean;
};

export const Text = ({ children, italic, bold, className }: Props) => {
  return (
    <p
      className={classNames(
        roboto.className,
        styles.text,
        italic ? styles.italic : undefined,
        bold ? styles.bold : undefined,
        className
      )}
    >
      {children}
    </p>
  );
};

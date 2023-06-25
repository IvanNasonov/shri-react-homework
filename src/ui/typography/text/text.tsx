import { Roboto } from "next/font/google";
import styles from "./text.module.css";
import classNames from "classnames";
import { ReactNode } from "react";

const roboto = Roboto({
  subsets: ["cyrillic"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

type Props = {
  children?: ReactNode;
  className?: string;
  italic?: boolean;
  bold?: boolean;
  large?: boolean;
  medium?: boolean;
  color?: string;
};

export const Text = ({
  children,
  italic,
  bold,
  className,
  large,
  medium,
  color,
}: Props) => {
  return (
    <p
      className={classNames(
        roboto.className,
        styles.text,
        italic ? styles.italic : undefined,
        bold ? styles.bold : undefined,
        large ? styles.large : undefined,
        medium ? styles.medium : undefined,
        className
      )}
      style={{ color: color }}
    >
      {children}
    </p>
  );
};

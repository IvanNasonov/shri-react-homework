import styles from "./title.module.css";

import { ReactNode } from "react";
import { Roboto } from "next/font/google";
import classNames from "classnames";

const roboto = Roboto({
  weight: "700",
  subsets: ["cyrillic"],
});

type Props = {
  children?: ReactNode;
  large?: boolean;
  className?: string;
};

export const Title = ({ children, large, className }: Props) => {
  return (
    <h3
      className={classNames(
        styles.title,
        roboto.className,
        large ? styles.large : undefined,
        className
      )}
    >
      {children}
    </h3>
  );
};

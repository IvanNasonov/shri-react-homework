import styles from "./form-text.module.css";

import classNames from "classnames";
import localFont from "next/font/local";
import { ReactNode } from "react";

const sfProText = localFont({
  src: "../../../../public/assets/fonts/SF-Pro-Text-Regular.otf",
});

type Props = {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
};

export const FormText = ({ children, disabled, className }: Props) => {
  return (
    <p
      className={classNames(
        sfProText.className,
        styles.text,
        disabled ? styles.disabled : undefined,
        className
      )}
    >
      {children}
    </p>
  );
};

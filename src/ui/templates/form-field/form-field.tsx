import styles from "./form-field.module.css";

import { ReactNode } from "react";
import classNames from "classnames";
import localFont from "next/font/local";

const sfProText = localFont({
  src: "../../../../public/assets/fonts/SF-Pro-Text-Regular.otf",
});

type Props = {
  label: string;
  InputComponent: ReactNode;
};

export const FormField = ({ label, InputComponent }: Props) => {
  return (
    <div className={styles.container}>
      <label className={classNames(sfProText.className, styles.label)}>
        {label}
      </label>
      {InputComponent}
    </div>
  );
};

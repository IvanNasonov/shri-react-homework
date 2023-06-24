import classNames from "classnames";
import styles from "./input-field.module.css";

import localFont from "next/font/local";

import { ChangeEvent } from "react";

const sfProText = localFont({
  src: "../../../../public/assets/fonts/SF-Pro-Text-Regular.otf",
});

type Props = {
  text: string;
  setText: (newText: string) => void;
};

export const InputField = ({ text, setText }: Props) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <input
      type="text"
      className={classNames(styles.inputField, sfProText.className)}
      placeholder="Введите название"
      value={text}
      onChange={onChange}
    />
  );
};

"use client";
import styles from "./input-field.module.css";

import classNames from "classnames";
import { ChangeEvent, useEffect, useState } from "react";
import localFont from "next/font/local";

const sfProText = localFont({
  src: "../../../../public/assets/fonts/SF-Pro-Text-Regular.otf",
});

type Props = {
  setText: (newText: string) => void;
};

export const InputField = ({ setText }: Props) => {
  const [debouncedText, setDebouncedText] = useState("");

  const hasText = debouncedText.length > 0;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDebouncedText(event.target.value);
  };

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      setText(debouncedText);
    }, 200);

    return () => clearTimeout(debounceTimeout);
  }, [debouncedText, setText]);

  return (
    <input
      type="text"
      className={classNames(
        styles.inputField,
        sfProText.className,
        hasText ? styles.selected : undefined
      )}
      placeholder="Введите название"
      value={debouncedText}
      onChange={onChange}
    />
  );
};

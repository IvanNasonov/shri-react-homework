import styles from "./dropdown-control.module.css";

import classNames from "classnames";
import localFont from "next/font/local";
import { MutableRefObject, RefObject, forwardRef } from "react";

import { IconArrow } from "../../icons";
import { FormText } from "../../typography";

const sfProText = localFont({
  src: "../../../../public/assets/fonts/SF-Pro-Text-Regular.otf",
});

type Props = {
  onClick: () => void;
  isListOpen: boolean;
  selectedItem?: string;
};

export const DropdownControl = forwardRef<HTMLButtonElement, Props>(
  function DropdownControl({ selectedItem, onClick, isListOpen }, ref) {
    const isSelected = Boolean(selectedItem) || isListOpen;
    const text = selectedItem ?? "Выберите жанр";

    return (
      <button
        className={classNames(
          styles.control,
          isSelected ? styles.selected : undefined
        )}
        onClick={onClick}
        ref={ref}
      >
        <IconArrow
          size={20}
          color="#999FA6"
          className={classNames(
            styles.icon,
            isListOpen ? styles.iconSelected : undefined
          )}
        />
        <FormText
          className={classNames(isSelected ? styles.titleSelected : undefined)}
        >
          {text}
        </FormText>
      </button>
    );
  }
);

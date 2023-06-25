import styles from "./dropdown-control.module.css";

import classNames from "classnames";
import { forwardRef } from "react";

import { IconArrow } from "../../icons";
import { FormText } from "../../typography";

type Props = {
  isListOpen: boolean;
  selectedItem: string | null;
  placeholderText: string;
  onClick: () => void;
};

export const DropdownControl = forwardRef<HTMLButtonElement, Props>(
  function DropdownControl(
    { selectedItem, onClick, isListOpen, placeholderText },
    ref
  ) {
    const isSelected = Boolean(selectedItem) || isListOpen;
    const text = selectedItem ?? placeholderText;

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
          className={classNames(
            styles.title,
            isSelected ? styles.titleSelected : undefined
          )}
        >
          {text}
        </FormText>
      </button>
    );
  }
);

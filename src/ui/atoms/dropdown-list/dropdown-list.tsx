"use client";

import styles from "./dropdown-list.module.css";

import classNames from "classnames";
import { useEffect, useRef } from "react";

import { DropdownItem } from "@types";

import { FormText } from "../../typography";

type Props = {
  isOpen: boolean;
  items: DropdownItem[];
  topPosition: number;
  leftPosition: number;
  width: number;

  closeList: () => void;
  onClickItem: (item: string) => void;
};

export const DropDownList = ({
  items,
  isOpen,
  topPosition,
  leftPosition,
  width,
  onClickItem,
  closeList,
}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeListHandler = () => {
      if (isOpen) closeList();
    };

    window.addEventListener("scroll", closeListHandler);

    return () => {
      window.removeEventListener("scroll", closeListHandler);
    };
  }, [closeList, isOpen]);

  return (
    <div
      ref={containerRef}
      className={classNames(
        styles.container,
        isOpen ? undefined : styles.closed
      )}
      style={{ top: topPosition, left: leftPosition, width }}
    >
      {items.map((item) => {
        const onClick = () => {
          onClickItem(item.id ?? item.name);
          closeList();
        };

        return (
          <button
            className={styles.item}
            key={item.id ?? item.name}
            onClick={onClick}
          >
            <FormText>{item.name}</FormText>
          </button>
        );
      })}
    </div>
  );
};

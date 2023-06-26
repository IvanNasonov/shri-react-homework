"use client";

import styles from "./dropdown-list.module.css";

import classNames from "classnames";
import { useEffect, useRef } from "react";

import { DropdownItem } from "@types";

import { FormText } from "../../typography";
import { Loader } from "../loader/loader";

type Props = {
  isOpen: boolean;
  items: DropdownItem[];
  topPosition: number;
  leftPosition: number;
  width: number;
  isLoading?: boolean;

  closeList: () => void;
  onClickItem: (item: DropdownItem) => void;
};

export const DropDownList = ({
  items,
  isOpen,
  topPosition,
  leftPosition,
  width,
  onClickItem,
  closeList,
  isLoading,
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

  const listWithDefaultOption = [{ name: "Не выбран" }, ...items];

  return (
    <div
      ref={containerRef}
      className={classNames(
        styles.container,
        isOpen ? undefined : styles.closed
      )}
      style={{ top: topPosition, left: leftPosition, width }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        listWithDefaultOption.map((item) => {
          const onClick = () => {
            onClickItem(item);
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
        })
      )}
    </div>
  );
};

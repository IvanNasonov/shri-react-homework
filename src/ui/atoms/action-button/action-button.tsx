import classNames from "classnames";
import styles from "./action-button.module.css";

import { Text } from "@ui/typography";

type Props = {
  text: string;
  type: "primary" | "secondary";
  onClick: () => void;
};

export const ActionButton = ({ onClick, text, type }: Props) => {
  const isPrimary = type === "primary";
  const textColor = isPrimary ? "#FFFFFF" : "#FF5500";

  return (
    <button
      className={classNames(
        styles.base,
        isPrimary ? styles.primary : styles.secondary
      )}
      onClick={onClick}
    >
      <Text color={textColor}>{text}</Text>
    </button>
  );
};

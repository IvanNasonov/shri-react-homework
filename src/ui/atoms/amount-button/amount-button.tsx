import styles from "./amount-button.module.css";

import classNames from "classnames";

import { IconMinus, IconPlus } from "../../icons";

type Props = {
  type: "increment" | "decrement";
  isEnabled: boolean;
  onClick: () => void;
};

export const AmountButton = ({ isEnabled, onClick, type }: Props) => {
  return (
    <button
      className={classNames(
        styles.container,
        isEnabled ? styles.enabled : styles.disabled
      )}
      onClick={onClick}
    >
      {type === "decrement" ? (
        <IconMinus size={12} color="#FFFFFF" />
      ) : (
        <IconPlus size={12} color="#FFFFFF" />
      )}
    </button>
  );
};

import styles from "./close-button.module.css";

import { IconClose } from "@ui/icons";

type Props = {
  size?: number;
  onClick: () => void;
};

export const CloseButton = ({ onClick, size = 20 }: Props) => {
  return (
    <button onClick={onClick} className={styles.close}>
      <IconClose size={size} />
    </button>
  );
};

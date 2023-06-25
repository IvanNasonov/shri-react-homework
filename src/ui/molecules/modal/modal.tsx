import styles from "./modal.module.css";

import { Title, Text } from "@ui/typography";
import { ActionButton, CloseButton } from "@ui/atoms";

type Props = {
  title: string;
  text: string;
  onClosePress: () => void;
  onConfirm: () => void;
  onDecline: () => void;
};

export const Modal = ({
  onClosePress,
  onConfirm,
  onDecline,
  text,
  title,
}: Props) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <Title>{title}</Title>
          <CloseButton onClick={onClosePress} size={16} />
        </div>

        <Text>{text}</Text>

        <div className={styles.footer}>
          <ActionButton onClick={onConfirm} text="Да" type="primary" />
          <ActionButton onClick={onDecline} text="Нет" type="secondary" />
        </div>
      </div>
    </div>
  );
};

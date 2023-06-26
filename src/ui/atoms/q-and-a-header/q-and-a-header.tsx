import styles from "./q-and-a-header.module.css";

import { Title } from "@ui/typography";

export const QAndAHeader = () => {
  return (
    <div className={styles.container}>
      <Title large>Вопросы-ответы</Title>
    </div>
  );
};

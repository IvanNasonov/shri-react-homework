import styles from "./form-field.module.css";

import { ReactNode } from "react";
import { FormText } from "../../typography";

type Props = {
  label: string;
  InputComponent: ReactNode;
};

export const FormField = ({ label, InputComponent }: Props) => {
  return (
    <div className={styles.container}>
      <FormText className={styles.label}>{label}</FormText>
      {InputComponent}
    </div>
  );
};

import { Text } from "@ui/typography";
import styles from "./cart-total.module.css";

type Props = {
  ticketsAmount: number;
};

export const CartTotal = ({ ticketsAmount }: Props) => {
  return (
    <div className={styles.container}>
      <Text bold>Итого билетов:</Text>
      <Text bold>{ticketsAmount}</Text>
    </div>
  );
};

import styles from "./cart-total.module.css";

import { useSelector } from "react-redux";

import { Text } from "@ui/typography";
import { getCartTotalAmount } from "@store/selectors";

export const CartTotal = () => {
  const ticketsAmount = useSelector(getCartTotalAmount);

  return (
    <div className={styles.container}>
      <Text bold>Итого билетов:</Text>
      <Text bold>{ticketsAmount}</Text>
    </div>
  );
};

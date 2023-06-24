import styles from "./cart-button.module.css";

import { Roboto } from "next/font/google";
import classNames from "classnames";
import Link from "next/link";
import { IconCart } from "../../icons";

type Props = {
  cartAmount: number;
};

const roboto = Roboto({
  weight: "700",
  subsets: ["cyrillic"],
});

export const CartButton = ({ cartAmount }: Props) => {
  return (
    <Link href={"/cart"} className={styles.cartButton}>
      {cartAmount > 0 ? (
        <div className={styles.cartAmountContainer}>
          <p className={classNames(roboto.className, styles.cartAmountText)}>
            {cartAmount}
          </p>
        </div>
      ) : null}

      <IconCart color="#FFFFFF" />
    </Link>
  );
};

import styles from "./header.module.css";

import { Logo } from "../../atoms";
import { CartButton } from "../../molecules";

type Props = {
  cartAmount: number;
};

export const Header = ({ cartAmount }: Props) => {
  return (
    <header className={styles.container}>
      <Logo />
      <CartButton cartAmount={10} />
    </header>
  );
};

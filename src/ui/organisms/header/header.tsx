import styles from "./header.module.css";

import { Logo } from "../../atoms";
import { CartButton } from "../../molecules";
import Link from "next/link";

type Props = {
  cartAmount: number;
};

export const Header = ({ cartAmount }: Props) => {
  return (
    <header className={styles.container}>
      <Link href="/main">
        <Logo />
      </Link>
      <CartButton cartAmount={cartAmount} />
    </header>
  );
};

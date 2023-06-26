import styles from "./header.module.css";

import Link from "next/link";

import { Logo } from "../../atoms";
import { CartButtonContainer } from "../../molecules";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/main">
        <Logo />
      </Link>
      <CartButtonContainer />
    </header>
  );
};

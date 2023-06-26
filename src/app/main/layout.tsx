import styles from "./main.module.css";

import { FiltersProvider } from "@lib";
import { FiltersContainer } from "@ui/organisms";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <FiltersProvider>
        <FiltersContainer />
        <div className={styles.filtersSpacer} />
        <section className={styles.filmsList}>{children}</section>
      </FiltersProvider>
    </div>
  );
}

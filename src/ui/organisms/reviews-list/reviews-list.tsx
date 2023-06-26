import styles from "./reviews-list.module.css";

import { ReviewCard } from "@ui/molecules";
import { Review } from "@store/types";

type Props = {
  reviews: Review[];
};

export const ReviewsList = ({ reviews }: Props) => {
  return (
    <section className={styles.list}>
      {reviews.map(({ id, name, rating, text, avatarUrl }, index) => (
        <ReviewCard
          key={id + index}
          author={name}
          rating={rating}
          review={text}
          avatarSrc={avatarUrl}
        />
      ))}
    </section>
  );
};

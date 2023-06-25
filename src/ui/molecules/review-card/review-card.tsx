import { Text, Title } from "@ui/typography";
import styles from "./review-card.module.css";

import { ReviewAvatar } from "@ui/atoms";

type Props = {
  author: string;
  rating: number;
  review: string;
  avatarSrc?: string;
};

export const ReviewCard = ({ avatarSrc, author, rating, review }: Props) => {
  return (
    <article className={styles.container}>
      <ReviewAvatar src={avatarSrc} />
      <section className={styles.content}>
        <div className={styles.header}>
          <Title>{author}</Title>
          <Text large>
            Оценка: <b>{rating}</b>
          </Text>
        </div>

        <Text medium>{review}</Text>
      </section>
    </article>
  );
};

import { IconPhoto } from "@ui/icons";
import styles from "./review-avatar.module.css";

import Image from "next/image";

type Props = {
  src?: string;
};

export const ReviewAvatar = ({ src }: Props) => {
  return src ? (
    <Image
      className={styles.avatar}
      src={src}
      alt={"Аватар пользователя"}
      width={100}
      height={100}
    />
  ) : (
    <div className={styles.placeholder}>
      <IconPhoto color="#828282" />
    </div>
  );
};

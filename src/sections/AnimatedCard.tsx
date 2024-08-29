import React from "react";
import styles from "../components/sections/CardWithAnimation/cardstyle.module.css";
import Link from "next/link";
import CardWithAnimationProps from "@/ts/interfaces/CardWithAnimation";
import { c } from "@/utils/get-content";
import { extractImgSrc } from "@/utils/get-img";

const AnimatedCard = ({ data }: CardWithAnimationProps) => {
  const items = data.items ? data.items : [];
  return (
    <div className={styles.cardsSection}>
      {items.map((item, index) => (
        <div
          key={index}
          className={styles.card}
          data-aos="fade-up"
          data-aos-delay={`${200 * index}`}
        >
          <span className={styles.icon}>
            <img alt="image" src={extractImgSrc(item, "img")} />
          </span>
          <h2 className={styles.title}>
            <Link href={item.path}>{c(item.title)}</Link>
          </h2>
          <p className={styles.description}>{c(item.description, true)}</p>
        </div>
      ))}
    </div>
  );
};

export default AnimatedCard;

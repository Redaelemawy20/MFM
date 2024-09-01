import React from "react";
import styles from "../components/sections/CardWithAnimation/cardstyle.module.css";
import Link from "next/link";
import CardWithAnimationProps from "@/ts/interfaces/CardWithAnimation";
import { useContent } from "@/utils/get-content";
import { getIcon } from "@/utils/get-icon";
import MainTitle from "./MainTitle";

const AnimatedCard = ({ data }: CardWithAnimationProps) => {
  const c = useContent();
  const items = data.items ? data.items : [];
  return (
    <div data-aos="fade-up">
      <MainTitle data={{ mainTitle: c(data.title) }} />
      <div className={styles.cardsSection}>
        {items.map((item, index) => (
          <div
            key={index}
            className={styles.card}
            data-aos="fade-up"
            data-aos-delay={`${200 * index}`}
          >
            <span className={styles.icon}>
              {getIcon(item.icon)}
              {/* <img alt="image" src={extractImgSrc(item, "img")} /> */}
            </span>
            <h2 className={styles.title}>
              <Link href={item.path || ""}>{c(item.title)}</Link>
            </h2>
            <p className={styles.description}>{c(item.description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCard;

import Link from "next/link";
import React from "react";
import styles from "./newscard.module.css";
import { NewsItem, NewsProps } from "@/ts/interfaces/NewsProps";
import { extractImgSrc } from "@/utils/get-img";
interface newsItemProps extends NewsItem {
  index: number;
  link: string;
}
const CardNews: React.FC<newsItemProps> = ({
  gallary,
  mainImageIdx,
  date,
  title,
  index,
  link,
}) => {
  const showImage = () => {
    const mainImage = gallary[mainImageIdx];
    return extractImgSrc(mainImage, "img");
  };
  return (
    <div
      className={styles.card_container}
      data-aos="zoom-in"
      data-aos-delay={`${300 * index}`}
    >
      <img src={showImage()} alt="" className={styles.img_news} />
      <p className={styles.date}>{date}</p>
      <Link
        href={link}
        className={`${styles.news_Title} ${styles.Text_elipsis}`}
      >
        {title}
      </Link>
    </div>
  );
};

export default CardNews;

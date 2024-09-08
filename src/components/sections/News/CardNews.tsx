import { format } from "date-fns";
import { ar } from "date-fns/locale"; // Import locale for Arabic
import { enUS } from "date-fns/locale";
import Link from "next/link";
import React from "react";
import styles from "./newscard.module.css";
import { NewsItem, NewsProps } from "@/ts/interfaces/NewsProps";
import { extractImgSrc } from "@/utils/get-img";
import { Lang } from "@/ts/common/Translatable";
import { useLocale } from "next-intl";
const locales = {
  ar: ar,
  en: enUS,
};
function formatDate(dateString: string, lang: Lang) {
  const date = new Date(dateString);
  return format(date, "eeee, d MMMM yyyy", { locale: locales[lang] });
}
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
  const locale = useLocale();
  const showImage = () => {
    const mainImage = gallary ? gallary[mainImageIdx] : {};
    return extractImgSrc(mainImage, "img");
  };

  return (
    <div
      className={styles.card_container}
      data-aos="zoom-in"
      data-aos-delay={`${300 * index}`}
    >
      <img src={showImage()} alt="" className={styles.img_news} />
      <p className={styles.date}>{formatDate(date, locale as Lang)}</p>
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

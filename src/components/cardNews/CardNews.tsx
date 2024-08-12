import Link from "next/link";
import React from "react";
import CardNewsStyle from "./CardNewsStyle";
import { NewsProps } from "@/ts/interfaces/NewsProps";
interface newsItemProps extends NewsProps {
  index: number;
}
const CardNews: React.FC<newsItemProps> = ({
  gallary,
  mainImageIdx,
  date,
  title,
  index,
}) => {
  const image = `/api/files?name=${gallary[mainImageIdx].img._s}`;
  return (
    <CardNewsStyle data-aos="zoom-in" data-aos-delay={`${300 * index}`}>
      <img src={image} alt="" className="img_news" />
      <p className="date">{date}</p>
      <Link href="/" className="news_Title Text_elipsis">
        {title}
      </Link>
    </CardNewsStyle>
  );
};

export default CardNews;

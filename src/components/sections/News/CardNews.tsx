import Link from "next/link";
import React from "react";
import CardNewsStyle from "./CardNewsStyle";
import { NewsProps } from "@/ts/interfaces/NewsProps";
import { extractImgSrc } from "@/utils/get-img";
interface newsItemProps extends NewsProps {
  index: number;
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
    <CardNewsStyle data-aos="zoom-in" data-aos-delay={`${300 * index}`}>
      <img src={showImage()} alt="" className="img_news" />
      <p className="date">{date}</p>
      <Link href={link} className="news_Title Text_elipsis">
        {title}
      </Link>
    </CardNewsStyle>
  );
};

export default CardNews;

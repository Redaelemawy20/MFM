import Link from "next/link";
import React from "react";
import CardNewsStyle from "./CardNewsStyle";
interface newsItemProps {
  image: string;
  date: string;
  title: string;
  index: number;
}
const CardNews: React.FC<newsItemProps> = ({ image, date, title, index }) => {
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

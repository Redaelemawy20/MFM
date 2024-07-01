import React, { JSXElementConstructor } from "react";
import CardStyle, { CardsSectionStyle } from "./CardStyle";
import Link from "next/link";

interface DataProps {
  img: React.ReactNode;
  title: string;
  path: string;
  description: string;
}

interface CardWithAnimationProps {
  data: DataProps[];
}

const CardWithAnimation: React.FC<CardWithAnimationProps> = ({ data }) => {
  return (
    <CardsSectionStyle>
      {data.map((item, index) => (
        <CardStyle
          key={index}
          data-aos="fade-up"
          data-aos-delay={`${200 * index}`}
        >
          <span className="icon">{item.img}</span>
          <h2 className="title">
            <Link href={item.path}>{item.title}</Link>
          </h2>
          <p className="description">{item.description}</p>
        </CardStyle>
      ))}
    </CardsSectionStyle>
  );
};

export default CardWithAnimation;

import React from "react";
import CardStyle, { CardsSectionStyle } from "./CardStyle";
import Link from "next/link";
import CardWithAnimationProps from "@/ts/interfaces/CardWithAnimation";

const CardWithAnimation = ({ data }: CardWithAnimationProps) => {
  return (
    <CardsSectionStyle>
      {data.items.map((item, index) => (
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

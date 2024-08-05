"use client";
import React from "react";
import CardStyle, { CardsSectionStyle } from "./CardStyle";
import Link from "next/link";
import CardWithAnimationProps from "@/ts/interfaces/CardWithAnimation";

const CardWithAnimation = ({ data }: CardWithAnimationProps) => {
  const items = data.items ? data.items : [];
  return (
    <CardsSectionStyle>
      {items.map((item, index) => (
        <CardStyle
          key={index}
          data-aos="fade-up"
          data-aos-delay={`${200 * index}`}
        >
          <span className="icon">
            <img alt="image" src={`/api/files?name=${item.img._s}`} />
          </span>
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

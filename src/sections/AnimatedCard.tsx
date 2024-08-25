"use client";
import React from "react";
import CardStyle, {
  CardsSectionStyle,
} from "../components/sections/CardWithAnimation/CardStyle";
import Link from "next/link";
import CardWithAnimationProps from "@/ts/interfaces/CardWithAnimation";
import { c } from "@/utils/get-content";
import { extractImgSrc } from "@/utils/get-img";

const AnimatedCard = ({ data }: CardWithAnimationProps) => {
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
            <img alt="image" src={extractImgSrc(item, "img")} />
          </span>
          <h2 className="title">
            <Link href={item.path}>{c(item.title)}</Link>
          </h2>
          <p className="description">{c(item.description, true)}</p>
        </CardStyle>
      ))}
    </CardsSectionStyle>
  );
};

export default AnimatedCard;

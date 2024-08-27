"use client";
import Carousel from "react-bootstrap/Carousel";

import HeroStyle from "../components/sections/Hero/HeroStyle";
import Button from "../components/common/Button";
import HeroProps from "@/ts/interfaces/HeroSectionProps";
import { c } from "@/utils/get-content";
import { useTranslations } from "next-intl";
import { extractImgSrc } from "@/utils/get-img";

const Hero = ({ data }: HeroProps) => {
  const items = data.items || [];
  const t = useTranslations("Hero");
  return (
    <HeroStyle>
      <Carousel fade>
        {items.map((item, index) => (
          <Carousel.Item
            key={index}
            style={{
              backgroundImage: `url(${extractImgSrc(item, "backgroundImage")})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <Carousel.Caption>
              <h2>({c(item.title, true)})</h2>
              <p>{c(item.description, true)}</p>
              {item.readMoreLink && (
                <Button
                  type="link"
                  text={t("read_more")}
                  path={item.readMoreLink}
                />
              )}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </HeroStyle>
  );
};

export default Hero;

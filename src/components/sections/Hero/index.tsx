"use client";
import Carousel from "react-bootstrap/Carousel";

import HeroStyle from "./HeroStyle";
import Button from "../../common/Button";
import HeroProps from "@/ts/interfaces/HeroSectionProps";

const Hero = ({ data }: HeroProps) => {
  const items = data.items || [];

  return (
    <HeroStyle>
      <Carousel fade>
        {items.map((item, index) => (
          <Carousel.Item
            key={index}
            style={{
              backgroundImage: `url(/api/files?name=${item.backgroundImage._s})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
              width: "100%",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <Carousel.Caption>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <Button type="link" text="Read more" path="#" />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </HeroStyle>
  );
};

export default Hero;

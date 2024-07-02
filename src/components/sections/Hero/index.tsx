import Carousel from "react-bootstrap/Carousel";

import HeroStyle from "./HeroStyle";
import Button from "../../common/Button";
import HeroProps from "@/ts/interfaces/HeroSectionProps";

const Hero = ({ data }: HeroProps) => {
  return (
    <HeroStyle>
      <Carousel fade>
        {data.items.map((item, index) => (
          <Carousel.Item
            key={index}
            style={{
              backgroundImage: `url(${item.backgrounImg})`,
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

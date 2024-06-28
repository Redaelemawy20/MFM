import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../exampleCarouselImg/ExampleCarouselImage";
import HeroStyle from "./HeroStyle";
import Button from "../Button/Button";

function Hero() {
  const data = [
    {
      backgrounImg: "/assets/imgs/slide-1.jpg",
      title: "First slide label",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      backgrounImg: "/assets/imgs/slide-2.jpg",
      title: "Second slide label",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      backgrounImg: "/assets/imgs/slide-3.jpg",
      title: "Third slide label",
      description:
        " Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];
  return (
    <HeroStyle>
      <Carousel fade>
        {data.map((item, index) => (
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
              <Button type="link" text="Read more" />
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </HeroStyle>
  );
}

export default Hero;

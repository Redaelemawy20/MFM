import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../exampleCarouselImg/ExampleCarouselImage";
import HeroStyle from "./HeroStyle";
import Button from "../Button/Button";
 
interface DataProps{
  backgrounImg:string,
  title:string,
  description:string,
}
interface HeroProps{
  data:DataProps[];
}

const Hero:React.FC<HeroProps>=({data})=> {
 
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

import React from "react";
import Image from "next/image";
import AboutStyle from "./AboutStyle";
import { BiCheckCircle } from "react-icons/bi";

interface DataProps {
  mainTitel: string;
  caption: string;
  viewImg: string;
  subTitel: string;
  subCaption: string;
  list: Array<string>;
  endCaption: string;
}
interface AboutProps {
  data: DataProps;
}

const About: React.FC<AboutProps> = ({ data }) => {
  const {
    mainTitel,
    caption,
    viewImg,
    subTitel,
    subCaption,
    list,
    endCaption,
  } = data;
  return (
    <AboutStyle>
      <div data-aos="fade-up">
        <h1 className="Main__Title">{mainTitel}</h1>
        <p className="main_Caption">{caption}</p>
      </div>
      <div className="divide_Sec">
        <div className="view__Image" data-aos="fade-right" data-aos-delay="300">
          <img src={viewImg} alt="view" />
        </div>
        <div className="info_Text" data-aos="fade-left" data-aos-delay="300">
          <h2>{subTitel}</h2>
          <p className="italic sub__Caption">{subCaption}</p>
          {list.map((item, index) => (
            <p key={index} className="list_Item">
              <span>
                <BiCheckCircle fill="var(--secondary-color)" />
              </span>
              {item}
            </p>
          ))}
          <p className="end_Caption">{endCaption}</p>
        </div>
      </div>
    </AboutStyle>
  );
};

export default About;

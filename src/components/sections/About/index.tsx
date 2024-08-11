"use client";
import React from "react";

import AboutStyle from "./AboutStyle";
import { BiCheckCircle } from "react-icons/bi";
import MainTitel from "../mainTitle/MainTitle";
import ServerImage from "@/ts/interfaces/ImageI";

interface DataProps {
  mainTitle: string;
  caption: string;
  viewImg: ServerImage;
  subTitle: string;
  subCaption: string;
  list: Array<string>;
  endCaption: string;
}
export interface AboutProps {
  data: DataProps;
}

const About = ({ data }: AboutProps) => {
  const {
    mainTitle,
    caption,
    viewImg,
    subTitle,
    subCaption,
    list,
    endCaption,
  } = data;
  return (
    <AboutStyle>
      <MainTitel
        data={{
          mainTitle,
          caption,
        }}
      />
      <div className="divide_Sec">
        <div className="view__Image" data-aos="fade-right" data-aos-delay="300">
          <img
            alt="image"
            src={`/api/files?name=${viewImg ? viewImg._s : ""}`}
          />
        </div>
        <div className="info_Text" data-aos="fade-left" data-aos-delay="300">
          <h2>{subTitle}</h2>
          <p className="italic sub__Caption">{subCaption}</p>
          {list &&
            list.map((item, index) => (
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

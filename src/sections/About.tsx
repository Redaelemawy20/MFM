"use client";
import React from "react";
import AboutStyle from "../components/sections/About/AboutStyle";
import { BiCheckCircle } from "react-icons/bi";
import MainTitel from "./MainTitle";
import { c } from "@/utils/get-content";
import { extractImgSrc } from "@/utils/get-img";
import { AboutProps } from "@/ts/interfaces/About";

const About = ({ data }: AboutProps) => {
  const { mainTitle, caption, subTitle, subCaption, list, endCaption } = data;
  const points = c(list, true) || [];
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
          <img alt="image" src={extractImgSrc(data, "viewImg")} />
        </div>
        <div className="info_Text" data-aos="fade-left" data-aos-delay="300">
          <h2>{c(subTitle, true)}</h2>
          <p className="italic sub__Caption">{c(subCaption, true)}</p>
          {points.map((item, index) => (
            <p key={index} className="list_Item">
              <span>
                <BiCheckCircle fill="var(--secondary-color)" />
              </span>
              {item}
            </p>
          ))}
          <p className="end_Caption">{c(endCaption, true)}</p>
        </div>
      </div>
    </AboutStyle>
  );
};

export default About;

"use client";
import React from "react";
import { FeaturesProps } from "@/ts/models/Feature";
import FeaturesStyle from "@/components/sections/features/FeaturesStyle";
import { extractImgSrc } from "@/utils/get-img";
import { c } from "@/utils/get-content";

const Features = ({ data }: FeaturesProps) => {
  const items = data.featuresItems || [{}];
  return (
    <FeaturesStyle>
      <div className="Main_wraper">
        <div className="Main_wraper_grid">
          <div className="info_content" data-aos="fade-up-right">
            {items.map((item, index) => (
              <div key={index} className="flex row__Item">
                <div>
                  <h3 className="title">{c(item.title, true)}</h3>
                  <p className="description">{c(item.description, true)}</p>
                </div>
              </div>
            ))}
          </div>
          <img alt="image" src={extractImgSrc(data, "mainImg")} />
        </div>
      </div>
    </FeaturesStyle>
  );
};

export default Features;

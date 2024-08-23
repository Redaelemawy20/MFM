"use client";
import React from "react";
import FeaturesStyle from "./FeaturesStyle";
import { FeaturesProps } from "@/ts/models/Feature";

const Features = ({ data }: FeaturesProps) => {
  const items = data.featuresItems || [{}];
  return (
    <FeaturesStyle>
      <div className="Main_wraper">
        <div className="Main_wraper_grid">
          <div className="info_content" data-aos="fade-up-right">
            {items.map((item, index) => (
              <div key={index} className="flex row__Item">
                {/* <div
                  className="icon"
                  style={{
                    color: "var(--secondary-color)",
                  }}
                >
                  {item.icon}
                </div> */}
                <div>
                  <h3 className="title">{item.title}</h3>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <img src={data.mainImg} alt="" data-aos="fade-up-left" /> */}
          <img
            alt="image"
            src={`/api/files?name=${data.mainImg ? data.mainImg._s : ""}`}
          />
        </div>
      </div>
    </FeaturesStyle>
  );
};

export default Features;

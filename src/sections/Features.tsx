import React from "react";
import { FeaturesProps } from "@/ts/interfaces/Feature";
import styles from "@/components/sections/features/featuresection.module.css";
import { extractImgSrc } from "@/utils/get-img";
import { useContent } from "@/utils/get-content";
import MainTitle from "./MainTitle";

const Features = ({ data }: FeaturesProps) => {
  const items = data.featuresItems || [{}];
  const c = useContent();
  return (
    <div className={styles.feature_Cont}>
      <div className="Main_wraper" data-aos="fade-up">
        <MainTitle data={{ mainTitle: c(data.title) }} />
        <div className={`Main_wraper_grid ${styles.Main_wraper_grid}`}>
          <div className={styles.info_content} data-aos="fade-up-right">
            {items.map((item, index) => (
              <div key={index} className={`flex ${styles.row__Item}`}>
                <div>
                  <h3 className={styles.titel}>{c(item.title)}</h3>
                  <p className={styles.description}>{c(item.description)}</p>
                </div>
              </div>
            ))}
          </div>
          <img
            alt="image"
            src={extractImgSrc(data, "mainImg")}
            data-aos="fade-up-left"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;

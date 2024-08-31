import React from "react";
import styles from "@/components/sections/About/about.module.css";
import { BiCheckCircle } from "react-icons/bi";
import MainTitel from "./MainTitle";
import { useContent } from "@/utils/get-content";
import { extractImgSrc } from "@/utils/get-img";
import { AboutProps } from "@/ts/interfaces/About";

const About = ({ data }: AboutProps) => {
  const c = useContent();
  const { mainTitle, caption, subTitle, subCaption, list, endCaption } = data;
  const points = c(list) || [];
  return (
    <div className={styles.about_Cont}>
      <MainTitel
        data={{
          mainTitle,
          caption,
        }}
      />
      <div className={styles.divide_Sec}>
        <div
          className={styles.view__Image}
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <img alt="image" src={extractImgSrc(data, "viewImg")} />
        </div>
        <div
          className={styles.info_Text}
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h2>{c(subTitle)}</h2>
          <p className={`${styles.italic} ${styles.sub__Caption}`}>
            {c(subCaption)}
          </p>
          {points.map((item, index) => (
            <p key={index} className={styles.list_Item}>
              <span>
                <BiCheckCircle fill="var(--secondary-color)" />
              </span>
              {item}
            </p>
          ))}
          <p className={styles.end_Caption}>{c(endCaption)}</p>
        </div>
      </div>
    </div>
  );
};

export default About;

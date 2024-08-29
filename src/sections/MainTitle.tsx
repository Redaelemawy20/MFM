import React from "react";
import styles from "../components/sections/mainTitle/maintitle.module.css";
import { MainTitleI } from "@/ts/interfaces/MainTiltel";
import { c } from "@/utils/get-content";

const MainTitle = ({ data }: MainTitleI) => {
  return (
    <div data-aos="fade-up">
      <h1 className={styles.mainTitle}>{c(data.mainTitle, true)}</h1>
      {data.caption && (
        <p className={styles.mainCaption}>{c(data.caption, true)}</p>
      )}
    </div>
  );
};

export default MainTitle;

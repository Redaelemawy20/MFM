import React from "react";
import styles from "../components/sections/mainTitle/maintitle.module.css";
import { MainTitleI } from "@/ts/interfaces/MainTiltel";
import { useContent } from "@/utils/get-content";

const MainTitle = ({ data }: MainTitleI) => {
  const c = useContent();
  return (
    <div data-aos="fade-up">
      <h1 className={styles.mainTitle}>{c(data.mainTitle)}</h1>
      {data.caption && <p className={styles.mainCaption}>{c(data.caption)}</p>}
    </div>
  );
};

export default MainTitle;

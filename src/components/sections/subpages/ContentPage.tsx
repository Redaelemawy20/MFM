import React from "react";
import styles from "./contentpage.module.css";
import { FaLayerGroup } from "react-icons/fa";
import { SubPage } from "@/ts/interfaces/SubPage";
import { useContent } from "../../../utils/get-content";

const ContentPage = ({ content }: { content: SubPage }) => {
  const c = useContent();
  const lines = c(content.lines) ?? [];
  console.log(content);

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <span className={styles.main_Icon}>
          <FaLayerGroup />
        </span>
        <h1 className={styles.main_title}>{c(content.mainTitle)}</h1>
      </div>
      <h2 className={styles.sub_title}>{c(content.subTitle)}</h2>
      <ul className={styles.list}>
        {lines.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContentPage;

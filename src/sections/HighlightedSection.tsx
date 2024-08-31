import React from "react";
import HighlightedSectionProps from "@/ts/interfaces/HighlightedSectionProps";
import Button from "@/components/common/Button";
import styles from "@/components/sections/HighlightedSection/highlighted.module.css";
import { useContent } from "@/utils/get-content";

const HighlightedSection = ({ data }: HighlightedSectionProps) => {
  const c = useContent();
  const styleButton = {
    fontWeight: "500",
    fontSize: "16px",
    letterSpacing: "1px",
    display: "inline-block",
    padding: "10px 35px",
    borderRadius: "25px",
    transition: "0.5s",
    marginTop: "10px",
    border: "2px solid var(--primary-color)",
    color: "var(--primary-color)",
  };
  return (
    <div className={styles.apoint__cont}>
      <div className={styles.inner__cont} data-aos="zoom-in">
        <h2 className={styles.title}>{c(data.title)}</h2>
        <p>{c(data.description)}</p>
        <Button
          type="roundedLink"
          path={data.path}
          text={c(data.btnText)}
          styleButton={styleButton}
        />
      </div>
    </div>
  );
};

export default HighlightedSection;

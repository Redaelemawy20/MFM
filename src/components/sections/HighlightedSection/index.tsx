"use client";
import React from "react";
import HighlightedSectionStyle from "./HighlightedSectionStyle";
import Button from "../../common/Button";
import HighlightedSectionProps from "@/ts/interfaces/HighlightedSectionProps";

const HighlightedSection = ({ data }: HighlightedSectionProps) => {
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
    <HighlightedSectionStyle>
      <div className="inner__cont" data-aos="zoom-in">
        <h2 className="title">{data.title}</h2>
        <p>{data.description}</p>
        <Button
          type="roundedLink"
          path={data.path}
          text={data.btnText}
          styleButton={styleButton}
        />
      </div>
    </HighlightedSectionStyle>
  );
};

export default HighlightedSection;

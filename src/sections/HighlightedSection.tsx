"use client";
import React from "react";

import HighlightedSectionProps from "@/ts/interfaces/HighlightedSectionProps";
import Button from "@/components/common/Button";
import HighlightedSectionStyle from "@/components/sections/HighlightedSection/HighlightedSectionStyle";
import { c } from "@/utils/get-content";

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
        <h2 className="title">{c(data.title)}</h2>
        <p>{c(data.description)}</p>
        <Button
          type="roundedLink"
          path={data.path}
          text={c(data.btnText)}
          styleButton={styleButton}
        />
      </div>
    </HighlightedSectionStyle>
  );
};

export default HighlightedSection;

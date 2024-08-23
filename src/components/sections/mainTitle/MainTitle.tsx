"use client";
import React from "react";
import MainTitleStyle from "./MainTitleStyle";
import { MainTitleI } from "@/ts/models/MainTiltel";

const MainTitle = ({ data }: MainTitleI) => {
  return (
    <MainTitleStyle data-aos="fade-up">
      <h1 className="Main__Title">{data.mainTitle}</h1>
      {data.caption && <p className="main_Caption">{data.caption}</p>}
    </MainTitleStyle>
  );
};

export default MainTitle;

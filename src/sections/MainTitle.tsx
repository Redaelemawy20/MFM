"use client";
import React from "react";
import MainTitleStyle from "../components/sections/mainTitle/MainTitleStyle";
import { MainTitleI } from "@/ts/models/MainTiltel";
import { c } from "@/utils/get-content";

const MainTitle = ({ data }: MainTitleI) => {
  return (
    <MainTitleStyle data-aos="fade-up">
      <h1 className="Main__Title">{c(data.mainTitle, true)}</h1>
      {data.caption && <p className="main_Caption">{c(data.caption, true)}</p>}
    </MainTitleStyle>
  );
};

export default MainTitle;

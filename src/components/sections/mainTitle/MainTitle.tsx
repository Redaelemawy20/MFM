"use client";
import React from "react";
import MainTitleStyle from "./MainTitleStyle";
interface DataProps {
  mainTitle: string;
  caption: string;
}
export interface MainTitleI {
  data: DataProps;
}
const MainTitle = ({ data }: MainTitleI) => {
  return (
    <MainTitleStyle data-aos="fade-up">
      <h1 className="Main__Title">{data.mainTitle}</h1>
      <p className="main_Caption">{data.caption}</p>
    </MainTitleStyle>
  );
};

export default MainTitle;

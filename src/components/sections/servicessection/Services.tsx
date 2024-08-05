"use client";
import React, { ReactNode } from "react";
import MainTitle from "../mainTitle/MainTitle";
import ServiceCard from "./ServiceCard";

interface CardData {
  // icon: ReactNode;
  title: string;
  description: string;
}

interface DataProps {
  title: string;
  caption: string;
  cardsData: CardData[];
}
export interface ServicesProps {
  data: DataProps;
}
const Services = ({ data }: ServicesProps) => {
  const cardsData = data.cardsData ? data.cardsData : [];
  return (
    <div className="Main_wraper">
      <MainTitle
        data={{
          mainTitle: data.title,
          caption: data.caption,
        }}
      />
      <ServiceCard dataCard={cardsData} />
    </div>
  );
};

export default Services;

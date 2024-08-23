"use client";
import React from "react";
import MainTitle from "../mainTitle/MainTitle";
import ServiceCard from "./ServiceCard";
import { ServicesProps } from "@/ts/models/Service";

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

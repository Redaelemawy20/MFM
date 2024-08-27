"use client";
import React from "react";
import MainTitle from "./MainTitle";
import ServiceCard from "../components/sections/servicessection/ServiceCard";
import { ServicesProps } from "@/ts/interfaces/Service";

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

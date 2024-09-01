import React from "react";
import CardofStatitics from "../components/sections/statistics/CardofStatitics";
import { StatisticsProps } from "@/ts/interfaces/Statistics";
import MainTitle from "./MainTitle";
import { useContent } from "@/utils/get-content";

const Statistics = ({ data }: StatisticsProps) => {
  const items = data.items ? data.items : [];
  const c = useContent();
  return (
    <section className="Main_wraper" data-aos="fade-up">
      <MainTitle data={{ mainTitle: c(data.title) }} />
      <div className="Main_wraper_grid">
        {items.map((item, index) => (
          <CardofStatitics key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Statistics;

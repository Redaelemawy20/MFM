import React from "react";
import CardofStatitics from "./CardofStatitics";
import { StatisticsProps } from "@/ts/models/Statistics";

const Statistics = ({ data }: StatisticsProps) => {
  const items = data.items ? data.items : [];

  return (
    <section className="Main_wraper" data-aos="fade-up">
      <div className="Main_wraper_grid">
        {items.map((item, index) => (
          <CardofStatitics key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Statistics;

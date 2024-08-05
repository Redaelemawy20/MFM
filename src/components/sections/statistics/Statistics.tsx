"use client";
import React, { ReactNode } from "react";
import CardofStatitics from "./CardofStatitics";
interface DataProps {
  // icon: ReactNode;
  num: number;
  subtitle: string;
  description: string;
}
export interface StatisticsProps {
  data: { items: DataProps[] };
}
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

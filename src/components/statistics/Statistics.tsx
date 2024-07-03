import React, { ReactElement, ReactNode } from "react";
import CardofStatitics from "./CardofStatitics";
interface DataProps {
  icon: ReactNode;
  num: number;
  subtitel: string;
  description: string;
}
interface StatisticsProps {
  data: DataProps[];
}
const Statistics: React.FC<StatisticsProps> = ({ data }) => {
  return (
    <section className="Main_wraper_grid" data-aos="fade-up">
      {data.map((item, index) => (
        <CardofStatitics key={index} item={item} />
      ))}
    </section>
  );
};

export default Statistics;

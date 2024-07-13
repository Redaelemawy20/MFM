import React, { ReactNode } from "react";
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
    <section className="Main_wraper" data-aos="fade-up">
      <div className="Main_wraper_grid">
        {data.map((item, index) => (
          <CardofStatitics key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Statistics;

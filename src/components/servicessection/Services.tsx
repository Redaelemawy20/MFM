import React, { ReactNode } from "react";
import MainTitel from "../mainTitel/MainTitel";
import ServiceCard from "./ServiceCard";

interface CardData {
  icon: ReactNode;
  title: string;
  description: string;
}

interface DataProps {
  caption: string;
  cardsData: CardData[];
}
interface ServicesProps {
  data: DataProps;
}
const Services: React.FC<ServicesProps> = ({ data }) => {
  return (
    <div className="Main_wraper">
      <MainTitel mainTitel="الـخـدمـات" caption={data.caption} />

      <ServiceCard dataCard={data.cardsData} />
    </div>
  );
};

export default Services;

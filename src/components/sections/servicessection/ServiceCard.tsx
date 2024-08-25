import React from "react";
import Link from "next/link";
import ServiceCardStyle from "./ServiceCardStyle";
import { c } from "@/utils/get-content";
interface CardData {
  // icon: ReactNode;
  title: string; // Corrected typo from 'titel' to 'title'
  description: string;
}

interface ServiceCardProps {
  dataCard: CardData[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ dataCard }) => {
  return (
    <ServiceCardStyle>
      <div className="Main_wraper_grid">
        {dataCard.map((item, index) => (
          <div className="Service_Card_Style" key={index} data-aos="zoom-in">
            <h3 className="titel">
              <Link href="/">{c(item.title)}</Link>
            </h3>
            <p className="description">{c(item.description)}</p>
          </div>
        ))}
      </div>
    </ServiceCardStyle>
  );
};

export default ServiceCard;

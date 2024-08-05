import React, { ReactNode } from "react";
import Link from "next/link";
import { FaHeartbeat } from "react-icons/fa";
import ServiceCardStyle from "./ServiceCardStyle";
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
            {/* <div className="icon_cont">
              <span className="icon">{item.icon}</span>
            </div> */}
            <h3 className="titel">
              <Link href="/">{item.title}</Link>
            </h3>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </ServiceCardStyle>
  );
};

export default ServiceCard;

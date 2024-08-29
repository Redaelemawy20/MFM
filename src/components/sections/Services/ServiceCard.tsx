import React from "react";
import Link from "next/link";
import { c } from "@/utils/get-content";
import styles from "./services.module.css";

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
    <div className={`${styles.Main_wraper_grid} Main_wraper_grid`}>
      <div className="Main_wraper_grid">
        {dataCard.map((item, index) => (
          <div
            className={styles.Service_Card_Style}
            key={index}
            data-aos="zoom-in"
          >
            <h3 className={styles.titel}>
              <Link href="/">{c(item.title)}</Link>
            </h3>
            <p className={styles.description}>{c(item.description)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;

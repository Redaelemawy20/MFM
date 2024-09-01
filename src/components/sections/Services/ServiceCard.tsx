import React from "react";
import Link from "next/link";
import { useContent } from "@/utils/get-content";
import styles from "./services.module.css";
import { icons } from "@/components/common/Icons";
import { CardData } from "@/ts/interfaces/Service";
import { getIcon } from "@/utils/get-icon";

const ServiceCard = ({ cardsData }: { cardsData: CardData[] }) => {
  const c = useContent();
  return (
    <div className={`${styles.Main_wraper_grid} Main_wraper_grid`}>
      {cardsData.map((item, index) => {
        const icon = getIcon(item.icon);
        return (
          <div
            className={styles.Service_Card_Style}
            key={index}
            data-aos="zoom-in"
          >
            <div className={styles.icon_cont}>
              {icon && <span className={styles.icon}>{icon}</span>}
            </div>
            <h3 className={styles.titel}>
              <Link href="/">{c(item.title)}</Link>
            </h3>
            <p className={styles.description}>{c(item.description)}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCard;

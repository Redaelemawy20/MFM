import React from "react";
import styles from "./staffsection.module.css";

interface CardStaffProps {
  img: string;
  name: string;
  position: string;
  slug: string;
  // cvLink: string;
  delayTime: number;
  // socialLinks: SocialLinks[];
}
function CardStaff({
  img,
  name,
  slug,
  position,
  delayTime,
}: // socialLinks,
CardStaffProps) {
  return (
    <div
      className={styles.card_container}
      data-aos="fade-up"
      data-aos-delay={delayTime}
    >
      <div className={styles.img_container}>
        <img src={img} alt="profile Image" />
      </div>
      <div className={styles.info}>
        <h1>{name}</h1>
        <a href={"/cv/" + slug} className={styles.Cv_Page_Link}>
          explore cv
        </a>
        <p className={styles.Text_elipsis}>{position}</p>
      </div>
    </div>
  );
}

export default CardStaff;

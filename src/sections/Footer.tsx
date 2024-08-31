import React from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import FooterProps from "@/ts/interfaces/FooterProps";
import styles from "@/components/sections/Footer/footer.module.css";
import { useContent } from "@/utils/get-content";
import Link from "next/link";
import { useTranslations } from "next-intl";
const Footer = ({ data }: FooterProps) => {
  const c = useContent();
  const t = useTranslations("Footer");
  return (
    <div className={styles.footer_container}>
      <div className={`Main_wraper_grid ${styles.Main_wraper_grid}`}>
        <div className={styles.data_foot}>
          <h1>{c(data.title)}</h1>
          <p> {c(data.paragraph)}</p>
        </div>
        <div className={styles.data_foot}>
          <h2> {c(data.column1Title)}</h2>
          {data.column1Links.map((l, i) => (
            <Link href={l.href} key={i}>
              {c(l.name)}
            </Link>
          ))}
        </div>
        <div className={styles.data_foot}>
          <h2> {c(data.column2Title)}</h2>
          {data.column2Links.map((l, i) => (
            <a href={l.href} key={i}>
              {c(l.name)}
            </a>
          ))}
        </div>
        <div className={styles.data_foot}>
          <h2>{t("contact")}</h2>
          <a
            href="https://www.google.com/maps/place/Menoufiya+University/@30.5655764,31.0105073,17z/data=!3m1!4b1!4m6!3m5!1s0x14f7d6eb70a91047:0xc353387ed2f37809!8m2!3d30.5655764!4d31.0130822!16zL20vMGIxeGc2?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineLocationMarker className={styles.data_foot} />
            {data.location}
          </a>
          <a>
            <BsTelephone className={styles.data_foot} />
            {data.phone}
          </a>
          <a href="mailto:your-email@example.com">
            <HiOutlineMail className={styles.data_foot} />
            {data.email}
          </a>
        </div>
      </div>
      <div className={styles.copy}>
        <p>{t("rights")}</p>
      </div>
    </div>
  );
};

export default Footer;

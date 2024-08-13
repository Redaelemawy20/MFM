import React from "react";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import FooterStyle from "./FooterStyle";
import FooterProps from "@/ts/interfaces/FooterProps";
const Footer = ({ data }: FooterProps) => {
  return (
    <FooterStyle>
      <div className="Main_wraper_grid">
        <div className="data-foot">
          <h1>
            <div></div>
            {data.title}
          </h1>
          <p> {data.paragraph}</p>
        </div>
        <div className="data-foot">
          <h2> {data.column1Title}</h2>
          {data.column1Links.map((l) => (
            <a href={l.href}>{l.name}</a>
          ))}
        </div>
        <div className="data-foot">
          <h2> {data.column2Title}</h2>
          {data.column2Links.map((l) => (
            <a href={l.href}>{l.name}</a>
          ))}
        </div>
        <div className="data-foot">
          <h2>Contact</h2>
          <a
            href="https://www.google.com/maps/place/Menoufiya+University/@30.5655764,31.0105073,17z/data=!3m1!4b1!4m6!3m5!1s0x14f7d6eb70a91047:0xc353387ed2f37809!8m2!3d30.5655764!4d31.0130822!16zL20vMGIxeGc2?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineLocationMarker className="icon--foot" />
            {data.location}
          </a>
          <a>
            <BsTelephone className="icon--foot" />
            {data.phone}
          </a>
          <a href="mailto:your-email@example.com">
            <HiOutlineMail className="icon--foot" />
            {data.email}
          </a>
        </div>
      </div>
      <div className="copy">
        <p>
          Copyright ©2022 All rights reserved | This template is made by
          Alaa_Ayaad
        </p>
      </div>
    </FooterStyle>
  );
};

export default Footer;

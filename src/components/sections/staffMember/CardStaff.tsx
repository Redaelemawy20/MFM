import React, { ReactNode } from "react";
import CardStaffStyle from "./CardStaffStyle";
interface SocialLinks {
  platform: ReactNode;
  link: string;
}
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
    <CardStaffStyle data-aos="fade-up" data-aos-delay={delayTime}>
      <div className="img_container">
        <img src={img} alt="profile Image" />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <a href={"/cv/" + slug} className="Cv_Page_Link">
          explore cv
        </a>
        <p className="Text_elipsis">{position}</p>
      </div>
    </CardStaffStyle>
  );
}

export default CardStaff;

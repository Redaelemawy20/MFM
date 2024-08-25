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
  // cvLink: string;
  delayTime: number;
  // socialLinks: SocialLinks[];
}
function CardStaff({
  img,
  name,
  // cvLink,
  position,
  delayTime,
}: // socialLinks,
CardStaffProps) {
  return (
    <CardStaffStyle data-aos="fade-up" data-aos-delay={delayTime}>
      <div className="img_container">
        <img src={img} alt="profile Image" />
        {/* <div className="social_Icons_container">
          {socialLinks.map((item, index: number) => (
            <a href={item.link} key={index}>
              <span className="social_icon">{item.platform}</span>
            </a>
          ))}
        </div> */}
      </div>
      <div className="info">
        <h1>{name}</h1>
        {/* <a href={cvLink} className="Cv_Page_Link">
        </a> */}
        <p className="Text_elipsis">{position}</p>
      </div>
    </CardStaffStyle>
  );
}

export default CardStaff;

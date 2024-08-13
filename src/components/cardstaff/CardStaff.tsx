import React, { ReactNode } from "react";
import CardStaffStyle from "./CardStaffStyle";
interface SocialLinks {
  platform: ReactNode;
  link: string;
}
interface CardStaffProps {
  img: string;
  name: string;
  bio: string;
  cvLink: string;
  delayTime: number;
  socialLinks: SocialLinks[];
}
function CardStaff({
  img,
  name,
  cvLink,
  bio,
  delayTime,
  socialLinks,
}: CardStaffProps) {
  return (
    <CardStaffStyle data-aos="fade-up" data-aos-delay={delayTime}>
      <div className="img_container">
        <img src={img} alt="profile Image" />
        <div className="social_Icons_container">
          {socialLinks.map((item, index: number) => (
            <a href={item.link} key={index}>
              <span className="social_icon">{item.platform}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="info">
        <a href={cvLink} className="Cv_Page_Link">
          <h1>{name}</h1>
        </a>
        <p className="Text_elipsis">{bio}</p>
      </div>
    </CardStaffStyle>
  );
}

export default CardStaff;

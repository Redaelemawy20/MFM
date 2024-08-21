"use client";
import CardStaff from "@/components/cardstaff/CardStaff";
import React, { ReactNode } from "react";
import StaffMemberStyle from "./StaffMemberStyle";
import MainTitle from "@/components/sections/mainTitle/MainTitle";
import { StaffData } from "@/ts/interfaces/StaffData";
import { extractImgSrc } from "@/utils/get-img";

interface socialLinksObject {
  platform: ReactNode;
  link: string;
}
interface staffObject {
  name: string;
  img: string;
  bio: string;
  cvLink: string;
  socialLinks: socialLinksObject[];
}
interface propsData {
  data: { data: StaffData }[];
}
const StaffMember: React.FC<propsData> = ({ data }) => {
  return (
    <StaffMemberStyle>
      <div className="Main_wraper">
        <MainTitle
          data={{
            mainTitle: "LeaderShip",
          }}
        />
        <div className="Main_wraper_flex">
          {data.map((item, index) => (
            <CardStaff
              key={index}
              img={extractImgSrc(item.data, "avatar")}
              name={item.data.name}
              position={item.data.position}
              // cvLink={item.cvLink}
              delayTime={index * 150}
              // socialLinks={item.socialLinks}
            />
          ))}
        </div>
      </div>
    </StaffMemberStyle>
  );
};

export default StaffMember;

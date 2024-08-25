"use client";
import React from "react";
import StaffMemberStyle from "../components/sections/staffMember/StaffMemberStyle";
import MainTitle from "@/sections/MainTitle";
import { StaffData } from "@/ts/interfaces/StaffData";
import { extractImgSrc } from "@/utils/get-img";
import CardStaff from "@/components/sections/staffMember/CardStaff";
import { c } from "@/utils/get-content";

interface propsData {
  data: { data: StaffData }[];
}
const StaffMember: React.FC<propsData> = ({ data }) => {
  console.log({ staff: data });

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
              name={c(item.data.name)}
              position={c(item.data.position)}
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

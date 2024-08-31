import React from "react";
import MainTitle from "@/sections/MainTitle";
import { StaffData } from "@/ts/interfaces/StaffData";
import { extractImgSrc } from "@/utils/get-img";
import CardStaff from "@/components/sections/staffMember/CardStaff";
import { c } from "@/utils/get-content";

interface propsData {
  data: { data: StaffData; slug: string }[];
}
const StaffMember: React.FC<propsData> = ({ data }) => {
  return (
    <div>
      <div className="Main_wraper">
        <MainTitle
          data={{
            mainTitle: "LeaderShip",
          }}
        />
        <div className="Main_wraper_grid">
          {data.map((item, index) => (
            <CardStaff
              key={index}
              img={extractImgSrc(item.data, "avatar")}
              name={c(item.data.name)}
              position={c(item.data.position)}
              slug={item.slug}
              // cvLink={item.cvLink}
              delayTime={index * 150}
              // socialLinks={item.socialLinks}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffMember;

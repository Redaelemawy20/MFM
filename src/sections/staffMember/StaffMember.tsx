import CardStaff from "@/components/cardstaff/CardStaff";
import React, { ReactNode } from "react";
import StaffMemberStyle from "./StaffMemberStyle";
import MainTitel from "@/components/mainTitel/MainTitel";
interface socialLinksObject {
  platform: ReactNode;
  link: string;
}
interface staffObject {
  name: string;
  img: string;
  bio: string;
  socialLinks: socialLinksObject[];
}
interface propsData {
  data: staffObject[];
}
const StaffMember: React.FC<propsData> = ({ data }) => {
  console.log(data);
  return (
    <StaffMemberStyle>
      <div className="Main_wraper">
        <MainTitel mainTitel="القيادات الحالية لجامعة المنوفية" />
        <div className="Main_wraper_flex">
          {data.map((item, index) => (
            <CardStaff
              key={index}
              img={item.img}
              name={item.name}
              bio={item.bio}
              delayTime={index * 150}
              socialLinks={item.socialLinks}
            />
          ))}
        </div>
      </div>
    </StaffMemberStyle>
  );
};

export default StaffMember;

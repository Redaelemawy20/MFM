"use client";
import React, { useEffect, useState } from "react";
import NavStyle from "@/components/sections/Nav/NavStyle";
import Top from "@/components/sections/Nav/NavTop";
import NavProps from "@/ts/interfaces/NavPops";
import NavContent from "@/components/sections/Nav/NavContent";

const Nav = ({ data, logo }: NavProps) => {
  // const [scrollDown, setScrollDown] = useState(0);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     setScrollDown(() => window.pageYOffset);
  //   });
  // }, []);
  return (
    <NavStyle>
      <div className={`main__Nav `}>
        <Top buttons={data.buttons} />
        <NavContent items={data.items} logo={logo} />
      </div>
    </NavStyle>
  );
};

export default Nav;

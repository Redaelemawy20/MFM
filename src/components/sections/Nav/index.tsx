"use client";
import React from "react";
import NavStyle from "@/components/sections/Nav/NavStyle";
import Top from "@/components/sections/Nav/NavTop";
import NavProps from "@/ts/interfaces/NavPops";
import NavContent from "@/components/sections/Nav/NavContent";

const Nav = ({ data }: NavProps) => {
  return (
    <NavStyle>
      <div className="main__Nav">
        <Top start={data.start} end={data.end} />
        <NavContent items={data.items} />
      </div>
    </NavStyle>
  );
};

export default Nav;

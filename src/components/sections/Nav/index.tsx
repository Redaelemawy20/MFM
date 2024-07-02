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
        <Top
          // startText="Saturday - Thursday, 8AM to 10PM"
          // endText="Call us now +1 5589 55488 55"
          topStartText={data.topStartText}
          topEndText={data.topEndText}
        />
        <NavContent items={data.items} />
      </div>
    </NavStyle>
  );
};

export default Nav;

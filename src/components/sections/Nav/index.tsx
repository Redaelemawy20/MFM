"use client";
import React, { useEffect, useRef, useState } from "react";
import NavStyle from "@/components/sections/Nav/NavStyle";
import Top from "@/components/sections/Nav/NavTop";
import NavProps from "@/ts/interfaces/NavPops";
import NavContent from "@/components/sections/Nav/NavContent";

const Nav = ({ data, logo }: NavProps) => {
  console.log("Navv");

  const [scrollDown, setScrollDown] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollDown(() => window.pageYOffset);
    });
  }, []);
  const headerRef = useRef<HTMLDivElement>(null);
  return (
    <NavStyle>
      <div
        className={`main__Nav ${scrollDown > 80 ? "toggleFirstRow" : ""}`}
        ref={headerRef}
      >
        <Top start={data.start} end={data.end} />
        <NavContent items={data.items} logo={logo} />
      </div>
    </NavStyle>
  );
};

export default Nav;

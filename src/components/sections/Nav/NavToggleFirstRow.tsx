"use client";

import styles from "@/components/sections/Nav/nav.module.css";
import { useEffect, useState } from "react";

const NavToggleFirstRow = ({ children }: { children: React.ReactNode }) => {
  const [scrollDown, setScrollDown] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollDown(() => window.pageYOffset);
    });
  }, []);
  return (
    <div
      className={`${styles.main__Nav}  ${
        scrollDown > 80 ? styles.toggleFirstRow : ""
      }`}
    >
      {children}
    </div>
  );
};

export default NavToggleFirstRow;

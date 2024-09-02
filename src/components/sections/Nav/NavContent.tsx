"use client";
import { useEffect, useRef, useState } from "react";
import { NavContentProps } from "@/ts/interfaces/NavPops";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

import styles from "./nav.module.css";
import { useContent } from "../../../utils/get-content";

const NavContent = ({ items, logo, logoStyle }: NavContentProps) => {
  const c = useContent();
  const [showList, setShowList] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [openSubDropdownIndex, setOpenSubDropdownIndex] = useState<
    number | null
  >(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const handleDropdownClick = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    setOpenSubDropdownIndex(null); // Close sub-dropdown when a new dropdown is opened
  };
  const handleSubDropdownClick = (index: number) => {
    setOpenSubDropdownIndex(openSubDropdownIndex === index ? null : index);
  };
  const handleMouseDown = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpenDropdownIndex(null);
      setOpenSubDropdownIndex(null);
      setShowList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  const renderLink = (
    item: (typeof items)[number],
    index: number,
    onDropDown: (index: number) => void
  ) => {
    return item.hasDropDown ? (
      <a onClick={() => onDropDown(index)}>
        {c(item.name)}
        {item.hasDropDown && <FaAngleDown className={styles.down_angle} />}
      </a>
    ) : (
      <Link href={item.href}>{c(item.name)}</Link>
    );
  };

  return (
    <div className={styles.Nav__Container}>
      <div className={`${styles.inner__Container} flex`}>
        <Image
          src={logo}
          style={logoStyle ? logoStyle : { width: "85px", height: "80px" }}
          alt="logo"
          width={80}
          height={100}
        />
        <div
          className={`${styles.navigate_Cont}  ${showList ? styles.show : ""}`}
        >
          {showList && (
            <button
              className={styles.exit_btn}
              onClick={() => setShowList(!showList)}
            >
              <HiXMark />
            </button>
          )}
          <ul className={`flex ${styles.list_links}`} ref={dropdownRef}>
            {Array.isArray(items) &&
              items.map((item, index) => (
                <li key={index}>
                  {renderLink(item, index, handleDropdownClick)}
                  {item.hasDropDown && openDropdownIndex === index && (
                    <ul className={styles.dropdown_menu}>
                      {item.menu.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          {renderLink(link, linkIndex, handleSubDropdownClick)}
                          {link.hasDropDown &&
                            openSubDropdownIndex === linkIndex && (
                              <ul
                                className={`${styles.dropdown_menu} ${styles.dropdown_sub_menu}`}
                              >
                                {link.menu.map((subLink, subLinkIndex) => (
                                  <li key={subLinkIndex}>
                                    <Link href={subLink.href}>
                                      {c(subLink.name)}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        </div>
        <div className="flex" style={{ gap: "25px" }}>
          <button
            className={styles.list_btn}
            onClick={() => setShowList(!showList)}
          >
            <FaBars style={{ width: "100%", height: "100%" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavContent;

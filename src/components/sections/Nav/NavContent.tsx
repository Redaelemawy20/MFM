"use client";
import { useEffect, useRef, useState } from "react";
import { NavContentProps } from "@/ts/interfaces/NavPops";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { c } from "@/utils/get-content";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { getValueIn } from "@/utils/trans";
import { Lang } from "@/ts/common/Translatable";

const NavContent = ({ items, logo, logoStyle }: NavContentProps) => {
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
  const currentLang = useLocale() as Lang;
  const renderLink = (
    item: (typeof items)[number],
    index: number,
    onDropDown: (index: number) => void
  ) => {
    return item.hasDropDown ? (
      <a onClick={() => onDropDown(index)}>
        {getValueIn(item.name, currentLang).toUpperCase()}
        {item.hasDropDown && <FaAngleDown className="down_angle" />}
      </a>
    ) : (
      <Link href={item.href}>
        {getValueIn(item.name, currentLang).toUpperCase()}
      </Link>
    );
  };

  return (
    <div className="Nav__Container">
      <div className="inner__Container flex">
        <Image
          src={logo}
          // style={logoStyle ? logoStyle : { width: "85px", height: "80px" }}
          alt="logo"
          width={50}
          height={100}
        />
        <div className={`navigate_Cont flex ${showList ? "show" : ""}`}>
          {showList && (
            <button className="exit_btn" onClick={() => setShowList(!showList)}>
              <HiXMark />
            </button>
          )}
          <ul className="flex list_links" ref={dropdownRef}>
            {items.map((item, index) => (
              <li key={index}>
                {renderLink(item, index, handleDropdownClick)}
                {item.hasDropDown && openDropdownIndex === index && (
                  <ul className="dropdown_menu">
                    {item.menu.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {renderLink(link, linkIndex, handleSubDropdownClick)}
                        {link.hasDropDown &&
                          openSubDropdownIndex === linkIndex && (
                            <ul className="dropdown_menu dropdown_sub_menu">
                              {link.menu.map((subLink, subLinkIndex) => (
                                <li key={subLinkIndex}>
                                  <Link href={subLink.href}>
                                    {getValueIn(subLink.name, currentLang)}
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
          <button className="list_btn" onClick={() => setShowList(!showList)}>
            <FaBars style={{ width: "100%", height: "100%" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavContent;

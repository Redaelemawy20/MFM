import { useState, useEffect, useRef } from "react";
import NavStyle from "./NavStyle";

import { FaAngleDown } from "react-icons/fa";

import { FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import { CSSProperties } from "styled-components";
type SubLink = {
  name: string;
  go?: string;
};

type LinkWithSubLinks = {
  name: string;
  go?: string;
  subLinks?: SubLink[];
};

type DropdownLinks = {
  links: LinkWithSubLinks[];
};

type DataProps = {
  name: string;
  go?: string;
  dropdownLinks?: DropdownLinks;
};
type logoStyle = {
  width: string;
  height: string;
};
type NavProps = {
  data: DataProps[];
  logo: string;
  logoStyle?: logoStyle;
};

export default function Header({ data, logo, logoStyle }: NavProps) {
  const [showList, setShowList] = useState(false);
  const [scrollDown, setScrollDown] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollDown(() => window.pageYOffset);
    });
  }, []);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [openSubDropdownIndex, setOpenSubDropdownIndex] = useState<
    number | null
  >(null);

  const headerRef = useRef<HTMLDivElement>(null);

  const handleDropdownClick = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    setOpenSubDropdownIndex(null); // Close sub-dropdown when a new dropdown is opened
  };

  const handleSubDropdownClick = (index: number) => {
    setOpenSubDropdownIndex(openSubDropdownIndex === index ? null : index);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      headerRef.current &&
      !headerRef.current.contains(event.target as Node)
    ) {
      setOpenDropdownIndex(null);
      setOpenSubDropdownIndex(null);
      setShowList(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <NavStyle>
      <div
        className={`main__Nav ${scrollDown > 80 ? "toggleFirstRow" : ""}`}
        ref={headerRef}
      >
        <div className="first_Row">
          <div className="Nav__Container flex">
            <p className="info flex">
              <a className="btn_link" href="/">
                جائزة التميز
              </a>
              <a className="btn_link" href="/">
                بوابة التوظيف
              </a>
            </p>
            <p className="info flex">
              <select>
                <option>AR</option>
                <option>EN</option>
              </select>
            </p>
          </div>
        </div>
        <div className="Nav__Container">
          <div className="inner__Container flex">
            <img
              src={logo}
              style={logoStyle ? logoStyle : { width: "85px", height: "80px" }}
              alt="logo"
            />
            <div className={`navigate_Cont flex ${showList ? "show" : ""}`}>
              {showList && (
                <button
                  className="exit_btn"
                  onClick={() => setShowList(!showList)}
                >
                  <HiXMark />
                </button>
              )}
              <ul className="flex list_links">
                {data.map((item, index) => (
                  <li key={index}>
                    <a onClick={() => handleDropdownClick(index)}>
                      {item.name.toUpperCase()}
                      {item.dropdownLinks && (
                        <FaAngleDown className="down_angle" />
                      )}
                    </a>
                    {item.dropdownLinks && openDropdownIndex === index && (
                      <ul className="dropdown_menu">
                        {item.dropdownLinks.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link.go}
                              onClick={() =>
                                link.subLinks &&
                                handleSubDropdownClick(linkIndex)
                              }
                              // className={link.go === pathname ? "active" : ""}
                            >
                              {link.name}
                              {link.subLinks && (
                                <FaAngleDown className="down_angle" />
                              )}
                            </a>
                            {link.subLinks &&
                              openSubDropdownIndex === linkIndex && (
                                <ul className="dropdown_menu dropdown_sub_menu">
                                  {link.subLinks.map(
                                    (subLink, subLinkIndex) => (
                                      <li key={subLinkIndex}>
                                        <a href={subLink.go}>{subLink.name}</a>
                                      </li>
                                    )
                                  )}
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
                className="list_btn"
                onClick={() => setShowList(!showList)}
              >
                <FaBars style={{ width: "100%", height: "100%" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </NavStyle>
  );
}

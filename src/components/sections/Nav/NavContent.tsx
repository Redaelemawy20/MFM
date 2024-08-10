import { useEffect, useState } from "react";
import { NavContentProps } from "@/ts/interfaces/NavPops";
import { FaAngleDown, FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";

const NavContent = ({ items, logo, logoStyle }: NavContentProps) => {
  const [showList, setShowList] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null
  );
  const [openSubDropdownIndex, setOpenSubDropdownIndex] = useState<
    number | null
  >(null);
  const handleDropdownClick = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
    setOpenSubDropdownIndex(null); // Close sub-dropdown when a new dropdown is opened
  };
  const handleSubDropdownClick = (index: number) => {
    setOpenSubDropdownIndex(openSubDropdownIndex === index ? null : index);
  };
  const handleMouseDown = (event: MouseEvent) => {
    setOpenDropdownIndex(null);
    setOpenSubDropdownIndex(null);
    setShowList(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
  return (
    <div className="Nav__Container">
      <div className="inner__Container flex">
        <img
          src={logo}
          style={logoStyle ? logoStyle : { width: "85px", height: "80px" }}
          alt="logo"
        />
        <div className={`navigate_Cont flex ${showList ? "show" : ""}`}>
          {showList && (
            <button className="exit_btn" onClick={() => setShowList(!showList)}>
              <HiXMark />
            </button>
          )}
          <ul className="flex list_links">
            {items.map((item, index) => (
              <li key={index}>
                <a onClick={() => handleDropdownClick(index)}>
                  {item.name.toUpperCase()}
                  {item.hasDropDown && <FaAngleDown className="down_angle" />}
                </a>
                {item.hasDropDown && openDropdownIndex === index && (
                  <ul className="dropdown_menu">
                    {item.menu.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          onClick={() =>
                            link.hasDropDown &&
                            handleSubDropdownClick(linkIndex)
                          }
                          // className={link.go === pathname ? "active" : ""}
                        >
                          {link.name}
                          {link.hasDropDown && (
                            <FaAngleDown className="down_angle" />
                          )}
                        </a>
                        {link.hasDropDown &&
                          openSubDropdownIndex === linkIndex && (
                            <ul className="dropdown_menu dropdown_sub_menu">
                              {link.menu.map((subLink, subLinkIndex) => (
                                <li key={subLinkIndex}>
                                  <a href={subLink.href}>{subLink.name}</a>
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

"use client";
import React, { useEffect, useState } from "react";
import NavStyle from "./NavStyle";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button/Button";
import { usePathname } from "next/navigation";
interface DataProps {
  name: string;
  go: string;
}
interface NavProps {
  data: DataProps[];
}
const Nav: React.FC<NavProps> = ({ data }) => {
  /**get Path Name */
  const pathName = usePathname();
  console.log(pathName);
  const [showList, setShowList] = useState(false);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    //  console.log(width);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, [window.innerWidth]);

  return (
    <NavStyle>
      <div className="main__Nav">
        <div className="first_Row">
          <div className="Nav__Container flex">
            <p className="info flex">
              <Image
                src="/assets/svgs/clock.svg"
                width={16}
                height={16}
                alt="clock icon"
              />
              Saturday - Thursday, 8AM to 10PM
            </p>
            <p className="info flex">
              <Image
                src="/assets/svgs/phone.svg"
                width={16}
                height={16}
                alt="clock icon"
              />
              Call us now +1 5589 55488 55
            </p>
          </div>
        </div>
        <div className="Nav__Container">
          <div className="inner__Container flex">
            <Image
              src="/assets/imgs/Logo.png"
              width={150}
              height={50}
              alt="logo"
            />
            <div className={`navigate_Cont flex ${showList ? "show" : ""}`}>
              {showList && (
                <button
                  className="exit_btn"
                  onClick={() => setShowList(!showList)}
                >
                  <img src="/assets/svgs/x-lg.svg" alt="" />
                </button>
              )}
              <ul className="flex list_links">
                {data.map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className={item.go === pathName ? "active" : ""}
                    >
                      {item.name.toUpperCase()}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex" style={{ gap: "25px" }}>
              {width > 1100 && (
                <Button text="Make an Appointment" type="link" path="#" />
              )}
              {width < 1100 && (
                <Button text="Appointment" type="link" path="#" />
              )}
              <button
                className="list_btn"
                onClick={() => {
                  setShowList(!showList);
                  console.log(showList);
                }}
              >
                <img src="/assets/svgs/list.svg" alt="list" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </NavStyle>
  );
};

export default Nav;

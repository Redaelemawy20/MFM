import Image from "next/image";
import Link from "next/link";
import Button from "../../common/Button";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface DataProps {
  name: string;
  href: string;
}
export interface NavContentProps {
  items: DataProps[];
}
const NavContent = ({ items }: NavContentProps) => {
  /**get Path Name */
  const pathName = usePathname();

  const [showList, setShowList] = useState(false);
  return (
    <div className="Nav__Container">
      <div className="inner__Container flex">
        <Image src="/assets/imgs/logo.png" width={150} height={50} alt="logo" />
        <div className={`navigate_Cont flex ${showList ? "show" : ""}`}>
          {showList && (
            <button className="exit_btn" onClick={() => setShowList(!showList)}>
              <img src="/assets/svgs/x-lg.svg" alt="" />
            </button>
          )}
          <ul className="flex list_links">
            {items.map((item, index) => (
              <li key={index}>
                <Link
                  href="#"
                  className={item.href === pathName ? "active" : ""}
                >
                  {item.name.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex" style={{ gap: "25px" }}>
          <Button text="Login" type="link" path="#" />
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
  );
};

export default NavContent;

import { NavTopProps } from "@/ts/interfaces/NavPops";
import LanguageSwitcher from "./LanguageSwitcher";
import { c } from "@/utils/get-content";
import Link from "next/link";

const NavTop = ({ buttons }: NavTopProps) => {
  return (
    <div className="first_Row">
      <div className="Nav__Container flex">
        <p className="info flex">
          {buttons.map((btn, i) => (
            <Link className="btn_link" href={btn.href} key={i}>
              {c(btn.name, true)}
            </Link>
          ))}
        </p>
        <p className="info flex">
          <LanguageSwitcher />
        </p>
      </div>
    </div>
  );
};

export default NavTop;

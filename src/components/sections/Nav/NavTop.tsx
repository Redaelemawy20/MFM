import { NavTopProps } from "@/ts/interfaces/NavPops";
import LanguageSwitcher from "./LanguageSwitcher";
import { c } from "@/utils/get-content";
import Link from "next/link";
import styles from "./nav.module.css";
import AuthStatus from "./AuthStatus";

const NavTop = ({ buttons }: NavTopProps) => {
  return (
    <div className={`${styles.first_Row} flex align-center`}>
      <div className={`${styles.Nav__Container} hidden md:flex`}>
        <p className={`${styles.info} flex`}>
          {buttons.map((btn, i) => (
            <Link className={styles.btn_link} href={btn.href} key={i}>
              {c(btn.name, true)}
            </Link>
          ))}
        </p>
      </div>
      <div className="flex align-center">
        <p className={`${styles.btn_link}  flex`}>
          <LanguageSwitcher />
        </p>
        <p className={`${styles.btn_link}  flex`}>
          <AuthStatus />
        </p>
      </div>
    </div>
  );
};

export default NavTop;

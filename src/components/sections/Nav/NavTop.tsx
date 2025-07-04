import { NavTopProps } from '@/ts/interfaces/NavPops';
import LanguageSwitcher from './LanguageSwitcher';
import { useContent } from '@/utils/get-content';
import Link from 'next/link';
import styles from './nav.module.css';

const NavTop = ({ buttons }: NavTopProps) => {
  const c = useContent();

  return (
    <div className={`${styles.first_Row} flex align-center`}>
      <div className={`${styles.Nav__Container} hidden md:flex`}>
        <p className={`${styles.info} flex`}>
          {Array.isArray(buttons) &&
            buttons.map((btn, i) => (
              <Link className={styles.btn_link} href={btn.href} key={i}>
                {c(btn.name)}
              </Link>
            ))}
        </p>
      </div>
      <div className="flex align-center">
        <p className={`${styles.btn_link}  flex`}>
          <LanguageSwitcher />
        </p>
      </div>
    </div>
  );
};

export default NavTop;

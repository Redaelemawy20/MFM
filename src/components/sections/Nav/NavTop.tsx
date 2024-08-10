import { NavTopProps } from "@/ts/interfaces/NavPops";
import Image from "next/image";

const NavTop = ({ start, end }: NavTopProps) => {
  return (
    <>
      <div className="first_Row">
        <div className="Nav__Container flex">
          <p className="info flex">
            <Image
              src="/assets/svgs/clock.svg"
              width={16}
              height={16}
              alt="clock icon"
            />
            {start}
          </p>
          <p className="info flex">
            <Image
              src="/assets/svgs/phone.svg"
              width={16}
              height={16}
              alt="clock icon"
            />
            {end}
          </p>
        </div>
      </div>
    </>
  );
};

export default NavTop;

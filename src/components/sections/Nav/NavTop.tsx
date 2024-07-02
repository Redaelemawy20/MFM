import Image from "next/image";
export interface NavTopProps {
  topStartText: string;
  topEndText: string;
}
const NavTop = ({ topStartText, topEndText }: NavTopProps) => {
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
            {topStartText}
          </p>
          <p className="info flex">
            <Image
              src="/assets/svgs/phone.svg"
              width={16}
              height={16}
              alt="clock icon"
            />
            {topEndText}
          </p>
        </div>
      </div>
    </>
  );
};

export default NavTop;

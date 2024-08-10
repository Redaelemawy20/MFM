import { NavTopProps } from "@/ts/interfaces/NavPops";

const NavTop = ({ start, end }: NavTopProps) => {
  return (
    <div className="first_Row">
      <div className="Nav__Container flex">
        <p className="info flex">
          <a className="btn_link" href="/">
            {start}
          </a>
          <a className="btn_link" href="/">
            {end}
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
  );
};

export default NavTop;

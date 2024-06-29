import React from "react";
import MakeAppointStyle from "./MakeAppointStyle";
import Button from "../Button/Button";

interface DataProp {
  title: string;
  description: string;
  btnText: string;
  path: string;
}
interface MakeAppointProps {
  data: DataProp;
}
const MakeAppoint: React.FC<MakeAppointProps> = ({ data }) => {
  const styleButton = {
    fontWeight: "500",
    fontSize: "16px",
    letterSpacing: "1px",
    display: "inline-block",
    padding: "10px 35px",
    borderRadius: "25px",
    transition: "0.5s",
    marginTop: "10px",
    border: "2px solid var(--primary-color)",
    color: "var(--primary-color)",
  };
  return (
    <MakeAppointStyle>
      <div className="inner__cont">
        <h2 className="title">{data.title}</h2>
        <p>{data.description}</p>
        <Button
          type="roundedLink"
          path={data.path}
          text={data.btnText}
          styleButton={styleButton}
        />
      </div>
    </MakeAppointStyle>
  );
};

export default MakeAppoint;

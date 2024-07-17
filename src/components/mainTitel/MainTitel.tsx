import React from "react";
import MaintitelStyel from "./MaintitelStyel";
interface DataProps {
  mainTitel: string;
  caption: string;
}
const MainTitel: React.FC<DataProps> = ({ mainTitel, caption }) => {
  return (
    <MaintitelStyel data-aos="fade-up">
      <h1 className="Main__Title">{mainTitel}</h1>
      <p className="main_Caption">{caption}</p>
    </MaintitelStyel>
  );
};

export default MainTitel;

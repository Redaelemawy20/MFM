import React, { ReactNode } from "react";
import FeaturesStyle from "./FeaturesStyle";
import { BiReceipt } from "react-icons/bi";
interface FeaturesItem {
  icon: ReactNode;
  titel: string;
  description: string;
}

interface DataProps {
  mainImg: string;
  featuresItems: FeaturesItem[];
}

interface FeaturesProps {
  data: DataProps;
}
const Features: React.FC<FeaturesProps> = ({ data }) => {
  return (
    <FeaturesStyle>
      <div className="Main_wraper_grid">
        <div className="info_content" data-aos="fade-up-right">
          {data.featuresItems.map((item, index) => (
            <div key={index} className="flex row__Item">
              <div
                className="icon"
                style={{
                  color: "var(--secondary-color)",
                }}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="titel">{item.titel}</h3>
                <p className="description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <img src={data.mainImg} alt="" data-aos="fade-up-left" />
      </div>
    </FeaturesStyle>
  );
};

export default Features;

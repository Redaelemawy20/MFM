import React, { useState } from "react";
import ContentPage from "./ContentPage";
import data from "./data";
import SubPagesLinksStyle from "./SubPagesLinksStyle";
interface Content {
  mainTitle: string;
  subTitle: string;
  lines: {
    type: string;
    elements: string[];
  };
}
function SubPagesLinks() {
  const [contentState, setContentState] = useState<Content>(data[0].content);
  const handleStateContent = (content: Content) => {
    console.log(content);
    setContentState(content);
  };
  return (
    <SubPagesLinksStyle>
      <div className="Main_wraper">
        <div className="Main_wraper_grid">
          <div className="links_Bar">
            {data.map((item, index) => (
              <p
                key={index}
                className={item.content === contentState ? "active" : ""}
                onClick={() => handleStateContent(item.content)}
              >
                {item.link}
              </p>
            ))}
          </div>
          <ContentPage content={contentState} />
        </div>
      </div>
    </SubPagesLinksStyle>
  );
}

export default SubPagesLinks;

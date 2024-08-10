import React from "react";
import ContentPageStyle from "./ContentPageStyle";
import { FaLayerGroup } from "react-icons/fa";

interface lines {
  type: string;
  elements: string[];
}
interface content {
  mainTitle: string;
  subTitle: string;
  lines: lines;
}
interface ContentPageProps {
  content: content;
}
const ContentPage: React.FC<ContentPageProps> = ({ content }) => {
  return (
    <ContentPageStyle>
      <div className="flex">
        <span className="main_Icon">
          <FaLayerGroup />
        </span>
        <h1>{content.mainTitle}</h1>
      </div>
      <h2>{content.subTitle}</h2>

      {content.lines.type === "order" ? (
        <ol>
          {content.lines.elements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      ) : content.lines.type === "unorder" ? (
        <ul>
          {content.lines.elements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        content.lines.elements.map((item, index) => <p key={index}>{item}</p>)
      )}
    </ContentPageStyle>
  );
};

export default ContentPage;

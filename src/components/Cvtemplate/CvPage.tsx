import React, { ReactNode } from "react";
import CvPageStyle from "./CvPageStyle";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
interface socialLinksObject {
  platform: ReactNode;
  link: string;
}
interface staffObject {
  id: number;
  name: string;
  img: string;
  bio: string;
  email?: string;
  socialLinks: socialLinksObject[];
}
interface CvPageProps {
  data: staffObject | undefined;
}
const CvPage: React.FC<CvPageProps> = ({ data }) => {
  const downloadPdf = () => {
    const input = document.getElementById("cv-content");

    if (input) {
      html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          console.log("Generated image data URL:", imgData);
          const pdf = new jsPDF("p", "mm", "a4");
          const imgProps = pdf.getImageProperties(imgData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
          pdf.save("cv-template.pdf");
        })
        .catch((error) => {
          console.error("Error generating canvas:", error);
        });
    } else {
      console.error("Element with id 'cv-content' not found.");
    }
  };

  return (
    <CvPageStyle>
      <div className="wrapper clearfix">
        {/* Download  Button */}
        <div className="download-button">
          <button onClick={downloadPdf}>Download PDF</button>
        </div>

        {/* CV Content */}
        <div id="cv-content">
          <div className="left">
            <div className="name-hero">
              <div className="me-img">
                <img src={data?.img} alt="my photo" />
              </div>
              <div className="name-text">
                <h1>{data?.name}</h1>
                <p>{data?.bio}</p>
                <p>{data?.email}</p>
                <p>(956) 500-5558</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="inner">
              <section>
                <h1>Employment</h1>
                <p>
                  Winter 2015 - Present{" "}
                  <em>Grand Interactive, llc. | Mobile App Developer</em>
                </p>
                <p>
                  Raised $78,000 in early stage funding, created initial design
                  concepts, and oversaw initial development. Currently oversee
                  and maintain all front end code and server functionality.
                </p>
                <p>
                  Spring 2012 - Winter 2015 |{" "}
                  <em>PadMatcher Inc. | CTO, Co-Founder</em>
                </p>
                <p>
                  Raised $78,000 in early stage funding, created initial design
                  concepts, and oversaw initial development. Oversaw and
                  maintained all front end code and server functionality.
                </p>
                <p>
                  Fall 2011 - Fall 2013 |{" "}
                  <em>Penrose Realty llc. | Desinger & Assistant</em>
                </p>
                <p>
                  Responsible for all technical areas. Maintain servers,
                  computers, and provide in office technical support. Rebranded
                  company from ground up including a fully responsive website.{" "}
                </p>
              </section>
              <section>
                <h1>Technical Skills</h1>
                <ul className="skill-set">
                  <li>Mobile Development</li>
                  <li>Xamarin</li>
                  <li>CSS3</li>
                  <li>Adobe Photoshop</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JQUERY</li>
                  <li>UI Design</li>
                  <li>Company Branding</li>
                  <li>Responsive Web Design</li>
                </ul>
              </section>
              <section>
                <h1>References</h1>
                <p>
                  William Grand | <em>Grand Interactive, llc. | CEO</em>
                </p>
                <p>(617) 448-0910 | wgrand@grandinteractive.com</p>
                <p>
                  Eric Chauvin | <em>PadMatcher Inc. | CEO</em>
                </p>
                <p>(617) 448-0910 | eric@padmatcher.com</p>
                <p>
                  Chris Heller <em>Penrose Realty LLC. | Broker</em>
                </p>
                <p>(617) 794-4554 | chris@penroserealty.com</p>
              </section>
              <section>
                <h1>Personal Interests</h1>
                <ul className="skill-set">
                  <li>Faith</li>
                  <li>Biblical Studies</li>
                  <li>Playing Guitar</li>
                  <li>Song Writing</li>
                  <li>Health & Nutrition</li>
                  <li>Reading</li>
                </ul>
              </section>
              <section>
                <div className="handmade">
                  <p>
                    handmade by <em> Anthony Adamski</em>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </CvPageStyle>
  );
};

export default CvPage;

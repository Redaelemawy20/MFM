import React, { ReactNode } from "react";
import CvPageStyle from "./CvPageStyle";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

interface About {
  dateOfBirth: string;
  gradFrom: string;
}
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
  about: About;
  office: string;
  mobile: string;
  empolyments: string[];
  academicQualifications: string[];
  publishedResearch: string[];
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
  /****Destruct About *****/

  const { dateOfBirth, gradFrom } = data?.about || {};

  return (
    <CvPageStyle>
      <div className="wrapper clearfix">
        {/* Download  Button */}
        <div className="download-button">
          <button onClick={downloadPdf}>Download PDF</button>
        </div>

        {/* CV Content */}
        {/* <div id="cv-content"> */}
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
        <div id="cv-content">
          <div className="right">
            <div className="inner">
              <section>
                <h1>About</h1>
                <p>Date Of Birth:{dateOfBirth}</p>
                <p>{gradFrom}</p>
              </section>
              <section>
                <h1>Employment</h1>
                {data?.empolyments.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </section>
              <section>
                <h1>Academic Qualifications</h1>
                {data?.academicQualifications.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </section>
              <section>
                <h1>Published Research</h1>
                {data?.publishedResearch.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </section>
              {/* <section>
                <h1>Personal Interests</h1>
                <ul className="skill-set">
                  <li>Faith</li>
                  <li>Biblical Studies</li>
                  <li>Playing Guitar</li>
                  <li>Song Writing</li>
                  <li>Health & Nutrition</li>
                  <li>Reading</li>
                </ul>
              </section> */}
              <section>
                <div className="handmade">
                  <p>
                    handmade by <em> Alaa Ayaad</em>
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

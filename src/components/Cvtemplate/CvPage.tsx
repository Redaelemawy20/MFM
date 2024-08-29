"use client";
import React, { useRef } from "react";
import styles from "./cvpage.module.css";
// @ts-ignore
import html2pdf from "html2pdf.js";

import { StaffData } from "@/ts/interfaces/StaffData";
import { extractImgSrc } from "@/utils/get-img";
import { c } from "@/utils/get-content";
import { getValueIn } from "@/utils/trans";

// const styles = {
//   wrapper: {
//     boxSizing: "border-box",
//     height: "100%",
//   },
//   downloadButton: {
//     position: "fixed",
//     top: "20px",
//     right: "20px",
//     zIndex: 1000,
//   },
//   downloadButtonButton: {
//     backgroundColor: "#3498db",
//     color: "white",
//     padding: "10px 20px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
//   downloadButtonButtonHover: {
//     backgroundColor: "#2980b9",
//   },
//   left: {
//     backgroundColor: "rgba(0, 0, 0, 0.025)",
//     borderRight: "1px solid rgba(0, 0, 0, 0.05)",
//     float: "right",
//     height: "100%",
//     marginLeft: "-1px",
//     minWidth: "256px",
//     position: "fixed",
//     width: "30%",
//   },
//   right: {
//     float: "right",
//     height: "100%",
//     position: "relative",
//     width: "70%",
//   },
//   nameHero: {
//     background: "rgba(0, 0, 0, 0.001)",
//     bottom: "0",
//     height: "290px",
//     left: "0",
//     margin: "auto",
//     position: "absolute",
//     right: "0",
//     top: "0",
//     width: "85%",
//   },
//   meImg: {
//     height: "180px",
//     margin: "0 auto",
//     position: "relative",
//     width: "180px",
//   },
//   meImgImg: {
//     width: "100%",
//     height: "100%",
//     borderRadius: "50%",
//     padding: "5px",
//     border: "1px solid #3498db",
//   },
//   nameHeroH1: {
//     fontFamily: "Open Sans, sans-serif",
//     fontSize: "1.5em",
//     textAlign: "center",
//   },
//   nameHeroH1Em: {
//     color: "rgba(0, 0, 0, 0.3)",
//     fontStyle: "normal",
//     fontWeight: "700",
//   },
//   nameHeroP: {
//     color: "rgba(0, 0, 0, 0.75)",
//     fontSize: "0.85em",
//     lineHeight: "1.5",
//     margin: "0 8px 0 0",
//     textAlign: "center",
//   },
//   nameText: {
//     margin: "0 auto",
//     width: "85%",
//   },
//   inner: {
//     margin: "0 auto",
//     maxWidth: "975px",
//     padding: "3em",
//   },
//   innerH1: {
//     fontSize: "1.75em",
//   },
//   innerP: {
//     color: "rgba(0, 0, 0, 0.5)",
//   },
//   innerPEM: {
//     color: "rgba(0, 0, 0, 1)",
//     fontStyle: "normal",
//   },
//   section: {
//     margin: "100px auto",
//   },
//   ul: {
//     listStyleType: "none",
//     marginTop: "-10px",
//     maxWidth: "570px",
//     padding: "0",
//   },
//   skillSetLi: {
//     background: "rgba(0, 0, 0, 0.75)",
//     borderRadius: "5px",
//     color: "#fff",
//     display: "inline-block",
//     listStyle: "none",
//     margin: "15px 15px 0 0",
//     padding: "10px",
//     textAlign: "justify",
//   },
// };

const CvPage = ({ staff }: { staff: StaffData }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleDownload = () => {
    const element = sectionRef.current;

    // Optional: Customize options for pdf
    const options = {
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: getValueIn(staff.name, "en") + "cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "landscape" },
    };

    // Generate and download the pdf
    html2pdf().from(element).set(options).save();
  };

  return (
    <div className={`${styles.wrapper} ${styles.clearfix}`}>
      {/* Download Button */}
      <div className={styles.download_button}>
        <button
          onMouseOver={(e) => {
            // (e.currentTarget.style.backgroundColor =
            //   styles.downloadButtonButtonHover.backgroundColor)
          }}
          onMouseOut={(e) => {
            // (e.currentTarget.style.backgroundColor =
            //   styles.downloadButtonButton.backgroundColor)
          }}
          onClick={handleDownload}
        >
          Download PDF
        </button>
      </div>

      {/* CV Content */}
      <div ref={sectionRef}>
        <div className={styles.left}>
          <div className={styles.name_hero}>
            <div className={styles.me_img}>
              <img src={extractImgSrc(staff, "avatar")} alt="my photo" />
            </div>
            <div className={styles.name_text}>
              <p>Title: {c(staff.title)}</p>
              <h1>Name: {c(staff.name)}</h1>
              <p>Position: {c(staff.position)}</p>
              <p>Degree: {c(staff.degree)}</p>
            </div>
          </div>
        </div>
        <div id="cv-content">
          <div className={styles.right}>
            <div className={styles.inner}>
              {staff.cv.map((section, i) => (
                <section key={i}>
                  <h1>{c(section.title)}</h1>
                  {c(section.points).map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvPage;

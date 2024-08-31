"use client";
import React, { useRef } from "react";
import styles from "./cvpage.module.css";
// @ts-ignore
import html2pdf from "html2pdf.js";

import { StaffData } from "@/ts/interfaces/StaffData";
import { extractImgSrc } from "@/utils/get-img";
import { useContent } from "@/utils/get-content";
import { getValueIn } from "@/utils/trans";

const CvPage = ({ staff }: { staff: StaffData }) => {
  const c = useContent();
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
        <button onClick={handleDownload}>Download PDF</button>
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

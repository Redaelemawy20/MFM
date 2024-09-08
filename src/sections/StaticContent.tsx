"use client";
import React from "react";
import ContentPage from "../components/sections/subpages/ContentPage";
import styles from "../components/sections/subpages/subpageslinks.module.css";
import { SubPage } from "@/ts/interfaces/SubPage";

function StaticContent({ data }: { data: SubPage }) {
  return (
    <div className={styles.Main_wraper_grid}>
      <div className="Main_wraper">
        <ContentPage content={data ?? {}} />
        {/* <div className="Main_wraper_grid">
          
        </div> */}
      </div>
    </div>
  );
}

export default StaticContent;

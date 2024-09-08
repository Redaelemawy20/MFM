"use client";
import React, { useState } from "react";
import ContentPage from "../components/sections/subpages/ContentPage";
import styles from "../components/sections/subpages/subpageslinks.module.css";
import { SubPageProps } from "@/ts/interfaces/SubPage";
import { useContent } from "@/utils/get-content";

function SubPages({ data }: SubPageProps) {
  const c = useContent();
  const items = data ? data.items || [] : [];
  const [contentState, setContentState] = useState<number>(0);
  const handleStateContent = (id: number) => {
    setContentState(id);
  };

  return (
    <div className={styles.Main_wraper_grid}>
      <div className="Main_wraper">
        <div className="Main_wraper_grid">
          <div className={styles.links_Bar}>
            {items.map((item, index) => (
              <p
                key={index}
                className={index === contentState ? styles.active : ""}
                onClick={() => handleStateContent(index)}
              >
                {c(item.mainTitle)}
              </p>
            ))}
          </div>
          <ContentPage content={items[contentState] ?? {}} />
        </div>
      </div>
    </div>
  );
}

export default SubPages;

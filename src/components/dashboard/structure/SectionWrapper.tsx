import React from "react";
import styles from "./SectionWrapper.module.css";

interface SectionWrapperProps {
  children: React.ReactNode;
  EditIcon: React.ReactNode;
  DeleteIcon: React.ReactNode;
}
export default function SectionWrapper({
  children,
  EditIcon,
  DeleteIcon,
}: SectionWrapperProps) {
  return (
    <div className={`${styles.sectionWrapper} w-full `}>
      {children}
      <div className={styles.iconContainer}>
        <div className={styles.iconButton}>{EditIcon}</div>
        <div className={styles.iconButton}>{DeleteIcon}</div>
      </div>
    </div>
  );
}

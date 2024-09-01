"use client";
import React, { useRef, useState, useEffect, ReactNode } from "react";
import CountUp from "react-countup";
import styles from "./statistics.module.css";
import { useContent } from "@/utils/get-content";
import { Statistic } from "@/ts/interfaces/Statistics";
import { getIcon } from "@/utils/get-icon";

const CardStatistics = ({ item }: { item: Statistic }) => {
  const c = useContent();
  const [startCount, setStartCount] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          if (cardRef.current) {
            observer.unobserve(cardRef.current);
          }
        }
      },
      {
        threshold: 0.1, // Adjust this value based on when you want to trigger the count
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  let icon = getIcon(item.icon);
  return (
    <div className={styles.statistics_Container} ref={cardRef}>
      <div className={styles.title}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {startCount ? (
          <h2>
            <CountUp end={parseInt(item.num)} duration={3} />
          </h2>
        ) : (
          <h2>0</h2>
        )}
      </div>
      <p className={styles.description}>
        <span className={styles.strong}>{c(item.subtitle)}</span>
        <br />
        {c(item.description)}
      </p>
    </div>
  );
};

export default CardStatistics;

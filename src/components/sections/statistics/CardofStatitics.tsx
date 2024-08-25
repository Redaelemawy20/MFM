"use client";
import React, { useRef, useState, useEffect, ReactNode } from "react";
import CountUp from "react-countup";
import CardStatisticsStyle from "./CardStatisticsStyle";
import Link from "next/link";
import { c } from "@/utils/get-content";
interface DataProps {
  // icon: ReactNode;
  num: string;
  subtitle: string;
  description: string;
}
interface CardStatisticsProps {
  item: DataProps;
}
const CardStatistics: React.FC<CardStatisticsProps> = ({ item }) => {
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

  return (
    <CardStatisticsStyle ref={cardRef}>
      <div className="title">
        {/* <span className="icon">{item.icon}</span> */}
        {startCount ? (
          <h2>
            <CountUp end={parseInt(item.num)} duration={3} />
          </h2>
        ) : (
          <h2>0</h2>
        )}
      </div>
      <p className="description">
        <span className="strong">{c(item.subtitle)}</span>
        {c(item.description)}
      </p>
    </CardStatisticsStyle>
  );
};

export default CardStatistics;

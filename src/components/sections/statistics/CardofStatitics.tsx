"use client";
import React, { useRef, useState, useEffect, ReactNode } from "react";
import CountUp from "react-countup";
import CardStatisticsStyle from "./CardStatisticsStyle";
import Link from "next/link";
interface DataProps {
  // icon: ReactNode;
  num: number;
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
            <CountUp end={item.num} duration={3} />
          </h2>
        ) : (
          <h2>0</h2>
        )}
      </div>
      <p className="description">
        <span className="strong">{item.subtitle}</span>
        {item.description}
      </p>
      <Link href="#">Find out more »</Link>
    </CardStatisticsStyle>
  );
};

export default CardStatistics;

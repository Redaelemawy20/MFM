"use client";

import { useEffect } from "react";
import Aos from "aos";
const AosProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);
  return children;
};

export default AosProvider;

"use client";

import Header from "@/components/dashboard/builder/header/Header";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <ReactQueryProvider>
      <Header />
      <div className="pt-28">{children}</div>
    </ReactQueryProvider>
  );
};
export default Layout;

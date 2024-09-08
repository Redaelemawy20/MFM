"use client";
import React from "react";
import SectionWrapper from "./SectionWrapper";
import EditLinksModal from "../factories/EditLinksModal";
import DisplaySectionModal from "../factories/DisplaySectionModal";

const NavWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SectionWrapper>{children}</SectionWrapper>;
};

export default NavWrapper;

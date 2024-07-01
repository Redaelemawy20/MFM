import React from "react";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
interface BreadCrumbsProps {
  segments: string[];
  isDisabled?: boolean;
}
export default function BreadCrumbs({
  segments,
  isDisabled,
}: BreadCrumbsProps) {
  return (
    <Breadcrumbs isDisabled={isDisabled}>
      {segments.map((item, i) => {
        return <BreadcrumbItem key={item + i}>{item}</BreadcrumbItem>;
      })}
    </Breadcrumbs>
  );
}

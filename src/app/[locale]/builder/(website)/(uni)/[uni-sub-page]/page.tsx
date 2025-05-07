import { getPageElements } from "@/services/ui/get-page-elements";
import { notFound } from "next/navigation";
import React from "react";

const UniSubPage = async ({
  params,
}: {
  params: { "uni-sub-page": string };
}) => {
  const { "uni-sub-page": page_name } = params;
  const pageElements = await getPageElements("menofia-university", page_name);
  if (!pageElements) {
    return notFound();
  }
  return pageElements.map((el, i) => (
    <React.Fragment key={i}>{el}</React.Fragment>
  ));
};

export default UniSubPage;

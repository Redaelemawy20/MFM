import { getPageElements } from "@/services/ui/get-page-elements";
import { notFound } from "next/navigation";
import React from "react";

// display entiy sub pages
export default async function EntiySubPage({
  params,
}: {
  params: { "e-name": string; "e-sub-page": string };
}) {
  const { "e-name": entity_name, "e-sub-page": page_name } = params;

  const pageElements = await getPageElements(entity_name, page_name);
  if (!pageElements) {
    return notFound();
  }
  return pageElements.map((el, i) => (
    <React.Fragment key={i}>{el}</React.Fragment>
  ));
}

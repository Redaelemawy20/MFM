// home page of the entity

import { getBaseElements } from "@/services/ui/get-base-elements";
import { getPageElements } from "@/services/ui/get-page-elements";
import { notFound } from "next/navigation";
import React from "react";

// display the home page sections
const EntityPage = async ({ params }: { params: { "e-name": string } }) => {
  const { "e-name": entity_name } = params;
  let base = await getBaseElements(entity_name);
  let pageSections = await getPageElements(entity_name, "_home");
  if (!pageSections) return notFound();
  if (base.news) pageSections.splice(base.news.order, 0, base.news.component);
  return (
    <>
      {pageSections.map((section, i) => (
        <React.Fragment key={i}>{section}</React.Fragment>
      ))}
    </>
  );
};

export default EntityPage;

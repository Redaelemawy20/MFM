import { getPageElements } from "@/services/ui/get-page-elements";
import { notFound } from "next/navigation";
import { getBaseElements } from "@/services/ui/get-base-elements";
import React from "react";

const Home = async () => {
  let base = await getBaseElements("menofia-university");
  let pageSections = await getPageElements("menofia-university", "_home");
  if (!pageSections) return notFound();
  if (base.news) pageSections.splice(base.news.order, 0, base.news.component);
  if (base.leaders)
    pageSections.splice(base.leaders.order, 0, base.leaders.component);

  return (
    <>
      {pageSections.map((section, i) => (
        <React.Fragment key={i}>{section}</React.Fragment>
      ))}
    </>
  );
};

export default Home;

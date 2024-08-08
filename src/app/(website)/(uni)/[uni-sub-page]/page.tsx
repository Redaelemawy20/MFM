import { getSections } from "@/services/getSections";
import { notFound } from "next/navigation";

const UniSubPage = async () => {
  const pageElements = await getSections("unit");
  if (!pageElements) {
    return notFound();
  }
  return pageElements;
};

export default UniSubPage;

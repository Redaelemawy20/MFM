import { getSections } from "@/services/getSections";
import { notFound } from "next/navigation";

// display entiy sub pages
export default async function EntiySubPage() {
  const pageElements = await getSections("quality");
  if (!pageElements) {
    return notFound();
  }
  return pageElements;
}

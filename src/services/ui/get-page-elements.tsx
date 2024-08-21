import { sectionsGallary } from "@/com/gallary";
import { sortSectionsWithOrder } from "@/utils/sort-sections-w-order";
import { getPageSections } from "../pageServices";

export async function getPageElements(entity_slug: string, page_slug: string) {
  let sections = await getPageSections(entity_slug, page_slug);
  if (!sections) return null;
  let pageSections: React.ReactNode[] = [];
  const sortedSections = sortSectionsWithOrder(sections);
  for (let section of sortedSections) {
    let sectionObj = sectionsGallary.find(
      (sec) => section.section.componentId === sec.componentId
    );
    if (sectionObj)
      pageSections.push(<sectionObj.component data={section.data} />);
  }
  return pageSections;
}

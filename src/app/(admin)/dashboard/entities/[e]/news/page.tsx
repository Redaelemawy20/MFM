// add one

import DisplaySectionModal from "@/components/dashboard/factories/DisplaySectionModal";
import EditNewsModal from "@/components/dashboard/factories/EditNewsModal";
import { getLayoutItemOfEntity } from "@/services/getLayoutItemOfEntity";
import { getSectionsOfType } from "@/services/getSectionsOfType";
import { EntitySlugParams } from "@/ts/common/NextPageParams";

// all news
export default async function ({ params }: EntitySlugParams) {
  const { e: slug } = params;
  const newsLayout = await getLayoutItemOfEntity(slug, "nav");
  const newsSections = await getSectionsOfType("nav");
  return (
    <div className="flex justify-between flex-wrap gap-4 items-center">
      <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
        <h1 className="text-2xl font-extrabold">All News</h1>
      </div>
      <div className="flex flex-row gap-3.5 flex-wrap">
        <EditNewsModal entity_slug={params.e} />
        <DisplaySectionModal
          entity_slug={slug}
          sections={newsSections}
          selectedIndex={newsLayout ? newsLayout.sectionId : 1}
        />
      </div>
    </div>
  );
}

// add one

import DisplaySectionModal from "@/components/dashboard/factories/DisplaySectionModal";
import EditNewsModal from "@/components/dashboard/factories/EditNewsModal";
import { getLayoutItemOfEntity } from "@/services/fetch/getLayoutItemOfEntity";
import { getSectionsOfType } from "@/services/fetch/getSectionsOfType";
import { EntitySlugParams } from "@/ts/common/NextPageParams";

// all news
export default async function ({ params }: EntitySlugParams) {
  const { e: slug } = params;
  const newsLayout = await getLayoutItemOfEntity(slug, "news");
  const newsSections = await getSectionsOfType("news");
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
          selectedIndex={newsLayout?.sectionId || 1}
          withorder={{ order: newsLayout?.order || 0 }}
          sectionType="news"
        />
      </div>
    </div>
  );
}

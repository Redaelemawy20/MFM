// a generated page under the entity like department or unit

import CreatePageModal from "@/components/dashboard/factories/CreatePageModal";
import { Divider } from "@nextui-org/react";
import { EntitySlugParams } from "../../../../../../../ts/common/NextPageParams";
import { getEntityWithPages } from "@/services/fetch/getEntityWithPages";
import { notFound } from "next/navigation";
import PagesTable from "@/components/dashboard/table/PagesTable";

// add section

// sort sections

// all sections along with edit remove

export default async ({ params }: EntitySlugParams) => {
  const entity = await getEntityWithPages(params.e);
  if (!entity) return notFound();
  const { pages: entityPages } = entity;
  return (
    <>
      <h3 className="text-xl font-semibold">{entity.name}</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <h3 className="text-xl font-semibold">All Pages</h3>
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <CreatePageModal entity_slug={params.e} />
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <PagesTable entityPages={entityPages} entity_slug={entity.slug} />
      </div>
      <Divider />
    </>
  );
};

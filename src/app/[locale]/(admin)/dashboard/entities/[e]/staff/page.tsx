import { Divider } from "@nextui-org/react";
import { EntitySlugParams } from "../../../../../../../ts/common/NextPageParams";
import { notFound } from "next/navigation";
import { getEntityWithStaff } from "@/services/fetch/getEntityWithStaff";
import CreateStaffModal from "@/components/dashboard/factories/CreateStaffModal";
import StaffTable from "@/components/dashboard/table/StaffTable";
import DisplaySectionModal from "@/components/dashboard/factories/DisplaySectionModal";
import { getSectionsOfType } from "@/services/fetch/getSectionsOfType";
import { getLayoutItemOfEntity } from "@/services/fetch/getLayoutItemOfEntity";

// add account

// accounts
export default async function ({ params }: EntitySlugParams) {
  const { e: entity_slug } = params;
  const entity = await getEntityWithStaff(entity_slug);
  const personSecitons = await getSectionsOfType("persons");
  const personLayout = await getLayoutItemOfEntity(entity_slug, "persons");
  if (!entity) return notFound();
  const { staff: entityStaff } = entity;
  return (
    <>
      <h3 className="text-xl font-semibold">{entity.name}</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <h3 className="text-xl font-semibold">All Staff</h3>
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <CreateStaffModal entity_slug={entity_slug} />
          <DisplaySectionModal
            entity_slug={entity_slug}
            sections={personSecitons}
            selectedIndex={personLayout ? personLayout.sectionId || 1 : 1}
            withorder={{ order: personLayout?.order || 0 }}
            sectionType="persons"
          />
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <StaffTable
          entityStaff={entityStaff as any}
          entity_slug={entity.slug}
        />
      </div>
      <Divider />
    </>
  );
}

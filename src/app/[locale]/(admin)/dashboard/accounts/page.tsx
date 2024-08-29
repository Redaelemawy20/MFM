import { Divider } from "@nextui-org/react";
import CreateStaffModal from "@/components/dashboard/factories/CreateStaffModal";
import { EntitySlugParams } from "@/ts/common/NextPageParams";
import { getUsersWithCerdentials } from "@/services/userService";

export default async function ({ params }: EntitySlugParams) {
  const { e: entity_slug } = params;
  const users = await getUsersWithCerdentials();

  return (
    <>
      <h3 className="text-xl font-semibold">All Users</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <h3 className="text-xl font-semibold">Manage Users</h3>
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <CreateStaffModal entity_slug={entity_slug} />
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        {/* <StaffTable
          entityStaff={entityStaff as any}
          entity_slug={entity.slug}
        /> */}
      </div>
      <Divider />
    </>
  );
}

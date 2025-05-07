import { Divider } from "@nextui-org/react";
import { getCerdentialsWithAll } from "@/services/cerdentialService";
import RolesTable from "@/components/dashboard/table/RolesTable";
import NewAccountModal from "@/components/dashboard/factories/NewAccountModal";
import { getEntities } from "@/services/entityServices";
import { getAllRoles } from "@/services/roleService";

export default async function () {
  const cerdentials = await getCerdentialsWithAll();
  const entities = await getEntities();
  const roles = await getAllRoles();
  return (
    <>
      <h3 className="text-xl font-semibold">All Roles</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <h3 className="text-xl font-semibold">Manage Roles</h3>
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          {/* <AddUserModal entities={entities as any} /> */}
          <NewAccountModal
            options={{
              btnText: "New account",
              color: "primary",
            }}
          />
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <RolesTable
          cerdentials={cerdentials}
          entities={entities as any}
          roles={roles}
        />
      </div>
      <Divider />
    </>
  );
}

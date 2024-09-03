import { Divider } from "@nextui-org/react";

import { getUsersWithCerdentials } from "@/services/userService";
import UsersTable from "@/components/dashboard/table/UsersTable";
import AddUserModal from "@/components/dashboard/factories/AddUserModal";
import { getEntities } from "@/services/entityServices";

export default async function () {
  const users = await getUsersWithCerdentials();
  const entities = await getEntities();
  return (
    <>
      <h3 className="text-xl font-semibold">All Users</h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <h3 className="text-xl font-semibold">Manage Users</h3>
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <AddUserModal entities={entities as any} />
        </div>
      </div>
      <div className="max-w-[95rem] mx-auto w-full">
        <UsersTable users={users} entities={entities} />
      </div>
      <Divider />
    </>
  );
}

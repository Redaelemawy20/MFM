import { Divider } from "@nextui-org/react";

import { getUsersWithCerdentials } from "@/services/userService";
import UsersTable from "@/components/dashboard/table/UsersTable";
import AddUserModal from "@/components/dashboard/factories/AddUserModal";
import { getEntities } from "@/services/entityServices";
import SubHeader from "@/components/dashboard/structure/SubHeader";
import Main from "@/components/dashboard/structure/Main";

export default async function () {
  const users = await getUsersWithCerdentials();
  const entities = await getEntities();
  return (
    <Main>
      <SubHeader>
        <h3 className="text-xl font-semibold">All Users</h3>
        <AddUserModal
          entities={entities as any}
          options={{
            btnText: "Add a new user",
          }}
        />
      </SubHeader>
      <div className="mt-3  max-w-[95rem] mx-auto w-full">
        <UsersTable users={users} entities={entities} />
      </div>
      <Divider />
    </Main>
  );
}

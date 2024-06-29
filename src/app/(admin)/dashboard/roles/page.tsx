import Table from "@/components/dashboard/table/Table";
import db from "@/db";

const Roles = async () => {
  const users = await db.user.findMany();
  return (
    <>
      <Table items={users} columns={["id", "email", "name", "roleId"]} />
    </>
  );
};

export default Roles;

"use client";
import Table from "./Table";
import Image from "next/image";
import { extractImgSrc } from "@/utils/get-img";
import { GetUsersWithCerdentialsReturnType } from "@/services/userService";
import EditUserModal from "../factories/EditUserModal";
import { isNotSuperAdmin } from "@/utils/gaurds";
import ChipDone from "../icons/ChipDone";
import EnableAccountModal from "../factories/EnableAccountModal";

interface AllUsersTable {
  users: GetUsersWithCerdentialsReturnType;
  entities: { id: number; slug: string; name: string }[];
}
const UsersTable = ({ users, entities }: AllUsersTable) => {
  return users.length === 0 ? (
    <div className="text-xl "> No Stff try to add </div>
  ) : (
    <Table
      items={users}
      columns={[
        {
          header: "###",
          value: (item) => (
            <Image
              width={40}
              height={40}
              alt="staff image"
              src={extractImgSrc(item.data, "avatar")}
            />
          ),
        },

        {
          header: "name",
          value: (item) => item.name,
        },
        {
          header: "entity",
          value: (item) => {
            const entity = entities.find((e) => e.id === item.entityId);
            if (!entity) return null;
            return entity.name;
          },
        },
        {
          header: "credentials",
          value: (item) =>
            item.cerdential ? (
              <ChipDone />
            ) : (
              <EnableAccountModal
                user={item}
                options={{
                  btnText: "Enable Account",
                  color: "warning",
                }}
              />
            ),
        },

        {
          header: "actions",
          value: (item: any) =>
            isNotSuperAdmin(item) && (
              <EditUserModal
                user={item}
                entities={entities as any}
                options={{
                  btnText: "edit",
                  color: "secondary",
                }}
              />
            ),
        },
      ]}
    />
  );
};

export default UsersTable;

"use client";
import Table from "./Table";
import {
  isAdmin,
  isEditor,
  isNotSuperAdmin,
  isSuperAdmin,
} from "@/utils/gaurds";

import { GetCerdentialsWithAllReturnType } from "@/services/cerdentialService";
import Entity from "@/ts/interfaces/Entity";
import { Role } from "@/ts/interfaces/Role";
import EditRoleModal from "../factories/EditRoleModal";

interface RolesTableI {
  cerdentials: GetCerdentialsWithAllReturnType;
  entities: Entity[];
  roles: Role[];
}
const RolesTable = ({ cerdentials, roles, entities }: RolesTableI) => {
  const rolesToChoose = roles.filter((r) => r.id !== 1);
  return cerdentials.length === 0 ? (
    <div className="text-xl "> No cerdentials try to add </div>
  ) : (
    <Table
      items={cerdentials}
      columns={[
        {
          header: "user",
          value: (item) => item.username,
        },
        {
          header: "linked staff",
          value: (item) => {
            if (!item.user) return "no linked user";
            return item.user.name;
          },
        },
        {
          header: "entity has control",
          value: (item) => {
            if (isSuperAdmin({ cerdential: item })) return "Superadmin";
            if (!item.entity) return "has no control";
            return item.entity.name;
          },
        },
        {
          header: "type of control",
          value: (item) => {
            if (isSuperAdmin({ cerdential: item }))
              return "has all control over all";
            if (isAdmin({ cerdential: item }))
              return "has all control over it's entity";
            if (isEditor({ cerdential: item }))
              return "can add and edit news and dynamic data";
            else return "has control only on his profile";
          },
        },

        {
          header: "actions",
          value: (item: any) =>
            isNotSuperAdmin({ cerdential: item }) && (
              <EditRoleModal
                cerdential={item}
                roles={rolesToChoose}
                entities={entities}
              />
            ),
        },
      ]}
    />
  );
};

export default RolesTable;

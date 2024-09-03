import * as Role from "./models/role";

export const getAllRoles = () => {
  return Role.findAll();
};

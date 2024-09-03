export const isSuperAdmin = (user: any) => {
  if (!user) return false;
  if (!user.cerdential) return false;

  return user.cerdential.roleId === 1;
};

export const isNotSuperAdmin = (user: any) => {
  return !isSuperAdmin(user);
};

export const isAdmin = (user: any) => {
  if (!hasCerdentials(user)) return false;
  return user.cerdential.roleId === 2;
};

export const isEditor = (user: any) => {
  if (!hasCerdentials(user)) return false;
  return user.cerdential.roleId === 3;
};
export const isUser = (user: any) => {
  if (!hasCerdentials(user)) return false;
  return user.cerdential.roleId === 4;
};

export const hasCerdentials = (user: any) => {
  if (!user) return false;
  return user.cerdential ? true : false;
};

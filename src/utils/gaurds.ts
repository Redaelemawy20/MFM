export const isSuperAdmin = (user: any) => {
  if (!user) return false;
  if (!user.cerdential) return false;

  return user.cerdential.roleId === 1;
};

export const isNotSuperAdmin = (user: any) => {
  return !isSuperAdmin(user);
};

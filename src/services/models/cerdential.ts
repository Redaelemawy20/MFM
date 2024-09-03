import db from "@/db";

export async function getCerdential(email: string) {
  return await db.cerdential.findUnique({
    where: {
      username: email,
    },
    include: {
      user: true,
      role: {
        include: {
          permissions: true,
        },
      },
    },
  });
}
type GetWithI = {
  user?: boolean;
  entity?: boolean;
  role?: boolean;
};
export async function getAllWith({ user, entity, role }: GetWithI) {
  return await db.cerdential.findMany({
    select: {
      id: true,
      username: true,
      userId: true,
      entityId: true,
      roleId: true,
      user,
      entity,
      role,
    },
  });
}
export async function createCerdential(
  { email, password }: { email: string; password: string },
  userId: number
) {
  await db.cerdential.create({
    data: {
      username: email,
      password,
      userId,
    },
  });
}

export async function update(id: number, data: any) {
  await db.cerdential.update({
    where: {
      id,
    },
    data: {
      entityId: data.entityId,
      roleId: data.roleId,
    },
  });
}

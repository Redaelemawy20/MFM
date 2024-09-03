import db from "@/db";
import { cache } from "react";
export const findStaff = cache(async (name: string) => {
  return await db.user.findUnique({
    where: {
      slug: name,
    },
  });
});

export const findAllWithCerdentials = async () => {
  return await db.user.findMany({
    include: {
      cerdential: {
        select: {
          username: true,
          roleId: true,
          entityId: true,
        },
      },
    },
  });
};
export const createOneForEntity = async (data: any, id: number) => {
  await db.user.create({
    data: {
      ...data,
      entityId: id,
    },
  });
};

export const updateOne = async (data: any, user_slug: string) => {
  await db.user.update({
    where: {
      slug: user_slug,
    },
    data: {
      ...data,
    },
  });
};

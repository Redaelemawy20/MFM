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
        },
      },
    },
  });
};

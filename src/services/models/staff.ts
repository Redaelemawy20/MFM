import db from "@/db";
import { cache } from "react";
export const findStaff = cache(async (name: string) => {
  return await db.user.findUnique({
    where: {
      slug: name,
    },
  });
});

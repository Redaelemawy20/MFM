import db from "@/db";
import { cache } from "react";

export const findAll = cache(async () => {
  return await db.role.findMany();
});

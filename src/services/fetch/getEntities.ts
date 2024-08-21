import db from "@/db";

export async function getEntities() {
  return await db.entity.findMany();
}

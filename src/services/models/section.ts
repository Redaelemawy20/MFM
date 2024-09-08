import db from "@/db";
import { SectionType } from "@prisma/client";

export async function findAll(type?: SectionType) {
  return await db.section.findMany({
    where: {
      type: type || "section",
    },
  });
}

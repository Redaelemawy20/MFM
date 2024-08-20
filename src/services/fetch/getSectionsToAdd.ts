import db from "@/db";

export async function getSectionsToAdd() {
  return await db.section.findMany({
    where: {
      type: "section",
    },
  });
}

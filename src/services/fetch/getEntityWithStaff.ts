import db from "@/db";

export async function getEntityWithStaff(entiy_slug: string) {
  const entity = await db.entity.findUnique({
    where: {
      slug: entiy_slug,
    },
    include: {
      staff: true,
    },
  });
  return entity;
}

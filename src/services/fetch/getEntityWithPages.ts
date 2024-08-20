import db from "@/db";

export async function getEntityWithPages(entiy_slug: string) {
  const entity = await db.entity.findUnique({
    where: {
      slug: entiy_slug,
    },
    include: {
      pages: true,
    },
  });
  return entity;
}

import db from "@/db";
export async function getPageSections(entity_slug: string, page_slug: string) {
  const pageSections = [];
  const entity = await db.entity.findUnique({
    where: {
      slug: entity_slug,
    },
  });
  if (!entity) return null;

  const page = await db.page.findUnique({
    where: {
      entityId_slug: {
        entityId: entity.id,
        slug: page_slug,
      },
    },
    include: {
      sections: {
        include: { section: true },
      },
    },
  });
  return page ? page.sections : null;
}

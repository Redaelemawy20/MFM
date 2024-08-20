import db from "@/db";

export async function getPageSections(page_slug: string) {
  const page = await db.page.findFirst({
    where: {
      slug: page_slug,
    },
    include: {
      sections: {
        include: { section: true },
      },
    },
  });

  return page ? page.sections : null;
}

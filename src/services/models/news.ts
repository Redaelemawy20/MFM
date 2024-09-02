import db from "@/db";

export const findAll = async (entity_slug: string, take?: number) => {
  return await db.news.findMany({
    where: {
      entity: {
        slug: entity_slug,
      },
    },
    take,
  });
};
export const findOne = async (slug: string) => {
  return await db.news.findFirst({
    where: {
      slug,
    },
  });
};

import db from "@/db";
import { cache } from "react";

export const getNews = cache(async (entity_slug: string, take?: number) => {
  return await db.news.findMany({
    where: {
      entity: {
        slug: entity_slug,
      },
    },
    take,
  });
});
export const getoneNews = cache(async (slug: string) => {
  return await db.news.findFirst({
    where: {
      slug,
    },
  });
});

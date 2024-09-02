import { cache } from "react";
import { findAll, findOne } from "./models/news";

export const getNews = cache(async (entity_slug: string, take?: number) => {
  return await findAll(entity_slug);
});
export const getOneNews = cache(async (slug: string) => {
  return await findOne(slug);
});

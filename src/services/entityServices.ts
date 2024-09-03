import { cache } from "react";
import { findAll, findWithNews, findWithStaff } from "./models/entity";

export const getEntityWithStaff = cache(async function (entiy_slug: string) {
  return findWithStaff(entiy_slug);
});

export const getEnityWithNews = cache(async function (entiy_slug: string) {
  return findWithNews(entiy_slug);
});

export const getEntities = cache(async () => {
  return await findAll();
});

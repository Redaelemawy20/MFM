import { cache } from "react";
import { findWithNews, findWithStaff } from "./models/entity";

export const getEntityWithStaff = cache(async function (entiy_slug: string) {
  return findWithStaff(entiy_slug);
});

export const getEnityWithNews = cache(async function (entiy_slug: string) {
  return findWithNews(entiy_slug);
});

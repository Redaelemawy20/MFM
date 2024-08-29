import { findWithStaff } from "./models/entity";

// import db from "@/db";
export async function getEntityWithStaff(entiy_slug: string) {
  return findWithStaff(entiy_slug);
}

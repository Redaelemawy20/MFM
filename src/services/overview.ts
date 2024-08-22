import db from "@/db";

export async function getOverview() {
  return {
    entities: await db.entity.count(),
    news: await db.news.count(),
    staff: await db.user.count(),
  };
}

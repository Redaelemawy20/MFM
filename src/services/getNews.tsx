import getComponent from "@/com/getComponent";
import db from "@/db";

export async function getNews(entiy_slug: string) {
  const entity = await db.entity.findFirst({
    where: {
      name: entiy_slug,
    },
    include: {
      news: true,
      layoutItem: {
        where: {
          id: 1,
        },
        include: {
          section: true,
        },
      },
    },
  });
  if (!entity) return;
  const { news, layoutItem } = entity;
  const found = getComponent(layoutItem[0].section.componentId);
  if (found) return <found.component data={news} />;
}

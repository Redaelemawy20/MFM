import { newsGallary, personsGallary } from "@/com/gallary";
import db from "@/db";
import { getNews } from "../models/news";

type BaseElementsReturn = {
  news: { order: number; component: React.ReactNode } | null;
  leaders: { order: number; component: React.ReactNode } | null;
};
export async function getBaseElements(
  entiy_slug: string
): Promise<BaseElementsReturn> {
  const baseSections = {
    news: null,
    leaders: null,
  };
  // return baseSections
  const entity = await db.entity.findFirst({
    where: {
      slug: entiy_slug,
    },
    include: {
      staff: {
        where: {
          leadership: true,
        },
        take: 4,
      },
      layoutItem: {
        include: {
          section: true,
        },
      },
    },
  });
  if (!entity) return baseSections;
  const { staff, layoutItem: layouts } = entity;
  const news = await getNews(entiy_slug, 3);
  let newsCompoent = null;
  let personsCompoent = null;
  const newsLayout = layouts.find((item) => item.type === "news");
  const staffLayout = layouts.find((item) => item.type === "persons");
  if (newsLayout && newsLayout.section) {
    let newsItemObj = newsGallary.find(
      (item) => item.componentId === newsLayout.section?.componentId
    );
    if (newsItemObj)
      newsCompoent = {
        order: typeof newsLayout.order == "number" ? newsLayout.order : -1,
        component: <newsItemObj.component data={news as any} />,
      };
  }
  if (staffLayout && staffLayout.section) {
    let personsItemObj = personsGallary.find(
      (item) => item.componentId === staffLayout.section?.componentId
    );
    if (personsItemObj)
      personsCompoent = {
        order: typeof staffLayout.order == "number" ? staffLayout.order : -1,
        component: <personsItemObj.component data={staff as any} />,
      };
  }
  return {
    news: newsCompoent,
    leaders: personsCompoent,
  };
}

import NewsSection from "@/sections/News";
import { getEnityWithNews } from "@/services/entityServices";
import { notFound } from "next/navigation";

const News = async ({ params }: { params: { "e-name": string } }) => {
  const { "e-name": entity_name } = params;
  const entity = await getEnityWithNews(entity_name);
  if (!entity) return notFound();
  return <NewsSection data={entity.news as any} />;
};

export default News;

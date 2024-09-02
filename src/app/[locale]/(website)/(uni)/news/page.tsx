import NewsSection from "@/sections/News";
import { getEnityWithNews } from "@/services/entityServices";
import { notFound } from "next/navigation";

const News = async () => {
  const entity = await getEnityWithNews("menofia-university");
  if (!entity) return notFound();
  return <NewsSection data={entity.news as any} />;
};

export default News;

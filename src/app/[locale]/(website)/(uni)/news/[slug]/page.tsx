import NewsDetails from "@/components/sections/News/NewsDetails";
import { getoneNews } from "@/services/models/news";
import { NewsItem } from "@/ts/interfaces/NewsProps";

import { notFound } from "next/navigation";

const NewsPage = async ({ params }: { params: { slug: string } }) => {
  const news = (await getoneNews(params.slug)) as any;
  if (!news) return notFound();
  const newsData = news.details as NewsItem;
  return <NewsDetails newsData={newsData} />;
};

export default NewsPage;

import CardNews from "@/components/sections/News/CardNews";
import MainTitle from "@/sections/MainTitle";
import { NewsItem } from "@/ts/interfaces/NewsProps";
import { useContent } from "@/utils/get-content";
import { useTranslations } from "next-intl";

const NewsSection = ({
  data: news,
}: {
  data: { details: NewsItem; slug: string }[];
}) => {
  const t = useTranslations("News");
  const c = useContent();
  return (
    <div className="Main_wraper">
      <MainTitle data={{ mainTitle: t("title") }} />
      <div className="Main_wraper_divide flex justify-center  flex-wrap gap-4">
        {news.map((item, index) => (
          <CardNews
            {...item.details}
            date={item.date}
            title={c(item.details.title)}
            index={index}
            key={index}
            link={"/news/" + item.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;

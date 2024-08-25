"use client";
import CardNews from "@/components/sections/News/CardNews";
import MainTitle from "@/sections/MainTitle";
import { NewsProps } from "@/ts/models/NewsProps";
import { c } from "@/utils/get-content";

const NewsSection = ({ data: news }: { data: { details: NewsProps }[] }) => {
  return (
    <div className="Main_wraper">
      <MainTitle data={{ mainTitle: "Latest News" }} />
      <div className="Main_wraper_divide flex  flex-wrap gap-4">
        {news.map((item, index) => (
          <CardNews
            {...item.details}
            date={item.details.date}
            title={c(item.details.title)}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;

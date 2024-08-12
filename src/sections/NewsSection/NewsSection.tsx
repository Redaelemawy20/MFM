import CardNews from "@/components/cardNews/CardNews";
import MainTitle from "@/components/sections/mainTitle/MainTitle";
import { NewsProps } from "@/ts/interfaces/NewsProps";

const NewsSection = ({ data: news }: { data: NewsProps[] }) => {
  return (
    <div className="Main_wraper">
      <MainTitle data={{ mainTitle: "Latest News" }} />
      <div className="Main_wraper_divide flex  flex-wrap gap-4">
        {news.map((item, index) => (
          <CardNews
            {...item}
            date={item.date}
            title={item.title}
            index={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;

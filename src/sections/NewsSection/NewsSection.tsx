import React from "react";
import CardNews from "@/components/cardNews/CardNews";
import MainTitel from "@/components/mainTitel/MainTitel";
interface newsData {
  image: string;
  date: string;
  title: string;
}
interface DataProps {
  mainTitle: string;
  newsData: newsData[];
}

interface NewsProps {
  data: DataProps;
}
const NewsSection: React.FC<NewsProps> = ({ data }) => {
  return (
    <div className="Main_wraper">
      <MainTitel mainTitel={data.mainTitle} />
      <div className="Main_wraper_divide flex  flex-wrap gap-4">
        {data.newsData.map((item, index) => (
          <CardNews
            image={item.image}
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

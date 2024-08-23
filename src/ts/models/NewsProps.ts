import { ServerImage } from "../interfaces/ImageI";

export interface NewsProps {
  data: NewsData;
}

export interface NewsItem {
  title: string;
  content: string[];
  gallary: ({ img: ServerImage } & { imageDescription: string })[];
  mainImageIdx: number;
  date: string;
}
type NewsData = NewsItem[];

import { ServerImage } from "./ImageI";

export interface NewsProps {
  title: string;
  content: string[];
  gallary: ({ img: ServerImage } & { imageDescription: string })[];
  mainImageIdx: number;
  date: string;
}

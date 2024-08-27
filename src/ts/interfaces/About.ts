import { ServerImage } from "../common/ImageI";

export interface DataProps {
  mainTitle: string;
  caption: string;
  viewImg: ServerImage;
  subTitle: string;
  subCaption: string;
  list: Array<string>;
  endCaption: string;
}
export interface AboutProps {
  data: DataProps;
}

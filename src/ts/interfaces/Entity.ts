import { ServerImage } from "../common/ImageI";

export default interface Entity {
  name: string;
  description: string;
  logo: ServerImage;
  topTitle: string;
}

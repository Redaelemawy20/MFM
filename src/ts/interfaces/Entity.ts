import { ServerImage } from "../common/ImageI";

export default interface Entity {
  id: number;
  slug: string;
  name: string;
  description: string;
  logo: ServerImage;
  topTitle: string;
}

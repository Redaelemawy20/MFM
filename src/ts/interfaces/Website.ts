import { ServerImage } from '../common/ImageI';

export default interface Website {
  id?: number;
  slug?: string;
  name: string;
  description: string;
  logo: ServerImage;
  topTitle?: string;
  url?: string;
  type?: string;
  status?: string;
}

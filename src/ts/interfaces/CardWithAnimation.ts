import { ServerImage } from "../common/ImageI";

interface AnimatiedCardI {
  img: ServerImage;
  title: string;
  path: string;
  description: string;
}

export default interface CardWithAnimationProps {
  data: CardWithAnimationData;
}
export type CardWithAnimationData = {
  items: AnimatiedCardI[];
};

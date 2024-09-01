import { IconType } from "@/components/common/Icons";

interface AnimatiedCardI {
  icon: IconType;
  title: string;
  path: string;
  description: string;
}

export default interface CardWithAnimationProps {
  data: CardWithAnimationData;
}
export type CardWithAnimationData = {
  items: AnimatiedCardI[];
  title: string;
};

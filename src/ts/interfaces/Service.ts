import { IconType } from "@/components/common/Icons";

export interface CardData {
  icon: IconType;
  title: string;
  description: string;
}

export interface ServiceData {
  title: string;
  caption: string;
  cardsData: CardData[];
}
export interface ServicesProps {
  data: ServiceData;
}

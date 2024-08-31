import { Lang } from "../common/Translatable";

interface Slide {
  backgroundImage: {
    _s: string;
  };
  title: string;
  description: string;
  readMoreLink?: string;
}
export default interface HeroProps {
  data: HeroDataType;
  selectedLang?: Lang;
}
export type HeroDataType = {
  items: Slide[];
};

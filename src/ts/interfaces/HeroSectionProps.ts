interface DataProps {
  backgroundImage: {
    _s: string;
  };
  title: string;
  description: string;
}
export default interface HeroProps {
  data: HeroDataType;
}
export type HeroDataType = {
  items: DataProps[];
};

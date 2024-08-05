interface DataProps {
  backgroundImage: {
    _s: string;
  };
  title: string;
  description: string;
}
export default interface HeroProps {
  data: {
    items: DataProps[];
  };
}

interface DataProps {
  backgrounImg: string;
  title: string;
  description: string;
}
export default interface HeroProps {
  data: {
    items: DataProps[];
  };
}

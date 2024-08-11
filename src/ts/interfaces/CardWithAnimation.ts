import ServerImage from "./ImageI";

interface DataProps {
  img: ServerImage;
  title: string;
  path: string;
  description: string;
}

export default interface CardWithAnimationProps {
  data: {
    items: DataProps[];
  };
}

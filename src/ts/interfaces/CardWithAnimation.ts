interface DataProps {
  img: React.ReactNode;
  title: string;
  path: string;
  description: string;
}

export default interface CardWithAnimationProps {
  data: {
    items: DataProps[];
  };
}

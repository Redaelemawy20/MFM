interface CardData {
  // icon: ReactNode;
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

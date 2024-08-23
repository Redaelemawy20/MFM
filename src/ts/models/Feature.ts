interface FeaturesItem {
  // icon: ReactNode;
  title: string;
  description: string;
}

export interface FeaturesData {
  mainImg: string;
  featuresItems: FeaturesItem[];
}

export interface FeaturesProps {
  data: FeaturesData;
}

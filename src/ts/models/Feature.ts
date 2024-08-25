import { ServerImage } from "../interfaces/ImageI";

interface FeaturesItem {
  // icon: ReactNode;
  title: string;
  description: string;
}

export interface FeaturesData {
  mainImg: ServerImage;
  featuresItems: FeaturesItem[];
}

export interface FeaturesProps {
  data: FeaturesData;
}

interface Statistic {
  // icon: ReactNode;
  num: number;
  subtitle: string;
  description: string;
}
export interface StatisticsData {
  items: Statistic[];
}
export interface StatisticsProps {
  data: StatisticsData;
}

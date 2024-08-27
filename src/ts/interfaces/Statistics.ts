interface Statistic {
  // icon: ReactNode;
  num: string;
  subtitle: string;
  description: string;
}
export interface StatisticsData {
  items: Statistic[];
}
export interface StatisticsProps {
  data: StatisticsData;
}

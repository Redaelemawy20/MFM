import { IconType } from "@/components/common/Icons";

export interface Statistic {
  icon: IconType;
  num: string;
  subtitle: string;
  description: string;
}
export interface StatisticsData {
  items: Statistic[];
  title: string;
}
export interface StatisticsProps {
  data: StatisticsData;
}

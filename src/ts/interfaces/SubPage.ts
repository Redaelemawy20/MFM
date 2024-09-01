export interface SubPage {
  mainTitle: string;
  subTitle: string;
  lines: string[];
}
export interface SubPageContent {
  items: SubPage[];
}
export interface SubPageProps {
  data: SubPageContent;
}

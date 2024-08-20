export default interface FooterProps {
  data: FooterData;
}
export interface FooterData {
  title: string;
  paragraph: string;
  column1Title: string;
  column2Title: string;
  column1Links: FooterColumn;
  column2Links: FooterColumn;
  location: string;
  phone: string;
  email: string;
}
type FooterColumn = {
  name: string;
  href: string;
}[];

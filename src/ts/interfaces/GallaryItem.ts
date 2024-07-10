import SectionProps from "./SectionProps";

export default interface GallaryItem {
  name?: string;
  componentId: string;
  component: (props: SectionProps) => JSX.Element;
  componentEdit: (props: SectionProps) => JSX.Element;
  imgurl: string;
}

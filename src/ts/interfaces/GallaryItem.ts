import SectionProps from "./SectionProps";
import FormProps from "./FormProps";
import HasId from "../common/HasId";

export default interface GallaryItem {
  name?: string;
  componentId: string;
  component: (props: SectionProps) => JSX.Element;
  componentEdit: (props: SectionProps & FormProps & HasId) => JSX.Element;
  defaultData: any;
}

import SectionProps from "@/ts/interfaces/SectionProps";
const gallary = require("./gallary");

interface GallaryItem {
  name: "";
  code: string;
  Component: (props: SectionProps) => JSX.Element;
  EditComponet: (props: SectionProps) => JSX.Element;
  imgurl: string;
}
export default (code: string) => {
  const found = (gallary as GallaryItem[]).find((g) => g.code === code);
  if (!found) return null;
  return found.Component;
};

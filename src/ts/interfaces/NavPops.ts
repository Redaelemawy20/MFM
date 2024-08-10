export default interface NavProps {
  data: NavTopProps & Omit<NavContentProps, "logo" | "logoStyle">;
  logo: string;
}
export interface NavTopProps {
  start: string;
  end: string;
}
type logoStyle = {
  width: string;
  height: string;
};

export interface NavContentProps {
  items: NavItemI[];
  logo: string;
  logoStyle?: logoStyle;
}
export type NavItemI = (LinkWithDropDown | LinkWihoutDropDown) & LinkBase;
interface LinkWithDropDown {
  hasDropDown: true;
  menu: NavItemI[];
}
interface LinkBase {
  name: string;
  href: string;
}
interface LinkWihoutDropDown {
  hasDropDown?: false | undefined;
}

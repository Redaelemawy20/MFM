export default interface NavProps {
  data: NavData;
  logo: string;
}
export type NavData = NavTopProps & Omit<NavContentProps, "logo" | "logoStyle">;
export type NavTopProps = { buttons: LinkBase[] };
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

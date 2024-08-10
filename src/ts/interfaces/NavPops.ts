export default interface NavProps {
  data: NavTopProps & NavContentProps;
}
export interface NavTopProps {
  start: string;
  end: string;
}
export interface NavContentProps {
  items: NavItemI[];
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

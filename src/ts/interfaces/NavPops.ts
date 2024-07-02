import { NavContentProps } from "@/components/sections/Nav/NavContent";
import { NavTopProps } from "@/components/sections/Nav/NavTop";

export default interface NavProps {
  data: NavTopProps & NavContentProps;
}

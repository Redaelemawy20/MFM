import { icons, IconType } from "@/components/common/Icons";

export function getIcon(icon: IconType | null) {
  if (icon) {
    const Icon = icons[icon];
    return <Icon />;
  }
  return null;
}

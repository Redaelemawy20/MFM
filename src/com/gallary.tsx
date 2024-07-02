import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";
export interface SectionProps {
  data?: any;
}
const gallary: {
  src: string;
  Component: (props: SectionProps) => JSX.Element;
}[] = [
  {
    src: "hiwie",
    Component: About,
  },
  {
    src: "iowa",
    Component: Footer,
  },
];

export const getComponent = (src: string) => {
  const found = gallary.find((g) => g.src === src);
  if (!found) return null;
  return found.Component;
};

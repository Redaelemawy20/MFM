import SectionProps from "@/ts/interfaces/SectionProps";
import { Button } from "@nextui-org/react";

const Footer = ({ data }: SectionProps) => {
  return (
    <>
      <Button variant="ghost" color="primary">
        {data.b1}
      </Button>
      <Button variant="ghost" color="warning">
        {data.b2}
      </Button>
    </>
  );
};

export default Footer;

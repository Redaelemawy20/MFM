import { Button } from "@nextui-org/react";
// import { SectionProps } from "../../com/gallary";
import { SectionProps } from "@/com/gallary";

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

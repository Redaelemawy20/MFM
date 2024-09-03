import { Chip } from "@nextui-org/react";
import { BiCheck } from "react-icons/bi";

const ChipDone = () => {
  return (
    <Chip color="default">
      <BiCheck color="green" size={20} />
    </Chip>
  );
};

export default ChipDone;

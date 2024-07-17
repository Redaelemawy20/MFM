import { Badge, Chip } from "@nextui-org/react";
import React from "react";
import styled from "styled-components";
import { CiSquareRemove } from "react-icons/ci";
const File = ({
  fileName,
  onDelete,
}: {
  fileName: string;
  onDelete: () => void;
}) => {
  return (
    <Badge
      content={
        <CiSquareRemove
          fontSize={"small"}
          style={{ cursor: "pointer" }}
          onClick={onDelete}
        />
      }
      color="secondary"
    >
      <Chip>{fileName}</Chip>
    </Badge>
  );
};

export default File;

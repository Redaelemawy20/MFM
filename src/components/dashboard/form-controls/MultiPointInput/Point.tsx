import { AiOutlineDelete } from "react-icons/ai";
import { PointInterface } from "../interfaces/MultiPointInputI";
import React from "react";
import { Input } from "@nextui-org/react";
export default function Point({
  point,
  onChange,
  onDelete,
  label,
  id = 0,
}: PointInterface) {
  return (
    <div className="flex flex-row items-center">
      <Input
        className="flex-grow"
        value={point}
        label={label ?? "point"}
        fullWidth
        onChange={(e) => {
          onChange(id, e.target.value);
        }}
      />
      <AiOutlineDelete size={20} onClick={() => onDelete(id)} />
    </div>
  );
}

import React from "react";
import TextAreaI from "./interfaces/TextAreaI";
import { Textarea } from "@nextui-org/react";

export default function ({
  name,
  label,
  value,
  onChange,
  rows = 3,
}: TextAreaI) {
  return (
    <Textarea
      fullWidth
      label={label}
      name={name}
      value={String(value) ?? ""}
      onChange={(e) => {
        onChange(e.target);
      }}
      rows={rows}
    />
  );
}

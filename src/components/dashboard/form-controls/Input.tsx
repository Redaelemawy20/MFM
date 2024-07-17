import InputI from "./interfaces/InputI";
import { Input } from "@nextui-org/react";
import React from "react";

const TextFeild = ({
  name,
  label,
  value,
  error,
  onChange,
  onValidate,
  rest = {},
}: InputI) => {
  return (
    <Input
      fullWidth
      label={label}
      name={name}
      value={value ? String(value) : ""}
      onChange={(e) => {
        onChange(e.target);
        onValidate && onValidate(e.target);
      }}
      {...rest}
    />
  );
};

export default TextFeild;

"use client";
import React from "react";
import SelectInputI from "./interfaces/SelectInputI";
import { Select, SelectItem } from "@nextui-org/react";

export default function <T>({
  name,
  label,
  value,
  onChange,
  onValidate,
  valueProp,
  options,
  optionValue,
}: SelectInputI<T>) {
  const getValueOf = (option: any, v: any, index: number) => {
    return option && typeof option === "object"
      ? (option as any)[v || "id"] || index
      : option;
  };
  return (
    <Select
      fullWidth
      value={value}
      label={label}
      name={name}
      onChange={(e) => {
        onChange(e.target as HTMLSelectElement);
        onValidate && onValidate(e.target as HTMLSelectElement);
      }}
    >
      {options.map((option, index) => (
        <SelectItem value={getValueOf(option, valueProp, index)} key={index}>
          {getValueOf(option, optionValue, index)}
        </SelectItem>
      ))}
    </Select>
  );
}

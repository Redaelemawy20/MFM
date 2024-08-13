"use client";
import React from "react";
import MultiPointInterface from "../interfaces/MultiPointInputI";
import Point from "./Point";
import { Button } from "@nextui-org/react";

export default function MultiPointInput({
  name: key,
  label,
  value: points = [],
  onValidate,
  onChange,
}: MultiPointInterface) {
  const handleChange = (id: number, value: string): void => {
    const clonedPoints = [...points];
    clonedPoints[id] = value;
    onChange({ name: key, value: clonedPoints });
    onValidate && onValidate({ name: key, value: clonedPoints });
  };
  const handleDelete = (id: number): void => {
    const clonedPoints = [...points];
    const filtered = clonedPoints.filter((item, index) => {
      return id !== index;
    });
    onChange({ name: key, value: filtered });
    onValidate && onValidate({ name: key, value: filtered });
  };
  const handleAdd = () => {
    const clonedPoints = [...points];

    clonedPoints.push("");
    onChange({ name: key, value: clonedPoints });
    onValidate && onValidate({ name: key, value: clonedPoints });
  };
  return (
    <>
      <div className="flex flex-row">
        <Button className="ms-1" onClick={handleAdd}>
          Add
        </Button>
      </div>
      <div className="flex flex-col items-stretch m-2">
        {points && points.length
          ? points.map((point, index) => {
              return (
                <Point
                  id={index}
                  key={index}
                  label={label}
                  onChange={handleChange}
                  onDelete={handleDelete}
                  point={point}
                />
              );
            })
          : `No items added to ${label} section`}
      </div>
    </>
  );
}

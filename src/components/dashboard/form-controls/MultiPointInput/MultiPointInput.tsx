"use client";
import React from "react";
import Point from "./Point";
import { Button } from "@nextui-org/react";
import InputI from "../interfaces/InputI";
import { useFormContext } from "../../forms/context/FormContext";

export default function MultiPointInput({
  name: key,
  label,
  value: points,
  onChange,
  translatable,
}: InputI) {
  const { handleChangeUpdated, lang } = useFormContext();
  let showedPoints;
  if (translatable) {
    let value = points ? points[lang] : points;
    showedPoints = value || [];
  } else {
    showedPoints = points || [];
  }
  const handleChange = (id: number, value: string): void => {
    const clonedPoints = [...showedPoints];
    clonedPoints[id] = value;

    handleChangeUpdated(
      Boolean(translatable),
      points,
      { name: key, value: clonedPoints },
      onChange
    );
  };

  const handleAdd = () => {
    const clonedPoints = [...showedPoints];

    clonedPoints.push("");

    handleChangeUpdated(
      Boolean(translatable),
      points,
      { name: key, value: clonedPoints },
      onChange
    );
  };
  const handleDelete = (id: number): void => {
    const clonedPoints = [...showedPoints];
    const filtered = clonedPoints.filter((item, index) => {
      return id !== index;
    });

    handleChangeUpdated(
      Boolean(translatable),
      showedPoints,
      { name: key, value: filtered },
      onChange
    );
  };
  return (
    <>
      <div className="flex flex-row">
        <Button className="ms-1" onClick={handleAdd}>
          Add
        </Button>
      </div>
      <div className="flex flex-col items-stretch m-2">
        {showedPoints.map((point: string, index: number) => {
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
        })}
      </div>
    </>
  );
}

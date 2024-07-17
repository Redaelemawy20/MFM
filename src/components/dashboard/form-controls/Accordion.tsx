"use client";

import AccordionI, { ChildFunction } from "./interfaces/AccordionI";
import {
  Accordion,
  AccordionItem,
  Button,
  Divider,
  Tooltip,
} from "@nextui-org/react";
import TextFeild from "./Input";
import EnsureTheValueOfKeyIsWithType from "@/ts/common/EnsureTheValueOfKeyIsWithType";

export default function Accordions<T, K extends keyof T>({
  value,
  name,
  titleProp,
  childs,
  onChange,
  onValidate,
  onDelete,
}: AccordionI<T, EnsureTheValueOfKeyIsWithType<T, K, string>>) {
  const handleChange = (
    id: number,
    { name: inputName, value: inputValue }: { name: keyof T; value: any }
  ) => {
    const cloned = [...value];
    const item = cloned[id];

    item[inputName] = inputValue;
    onChange({ name: String(name), value: cloned });
  };

  return (
    <div>
      <div>
        <Tooltip content="Add" className="mb-2" placement="top">
          <Button
            onClick={() => {
              const v = [...value];
              v.push({ value: " ", title: "new item" } as T);
              onChange({ name, value: v });
              onValidate && onValidate({ name, value: v });
            }}
          >
            Add
          </Button>
        </Tooltip>
      </div>
      <Divider />
      <Accordion selectionMode="single">
        {value.map((item, index) => {
          return (
            <AccordionItem
              title={item[titleProp] ? String(item[titleProp]) : "item"}
              key={index}
            >
              <Tooltip content="Remove">
                <Button
                  onClick={() => {
                    const v = [...value];
                    const fv = v.filter((v, i) => i !== index);
                    onChange({ name, value: fv });
                    onDelete && onDelete(index);
                    onValidate && onValidate({ name, value: fv });
                  }}
                >
                  Delete
                </Button>
              </Tooltip>
              <div className="flex flex-col">
                <TextFeild
                  label="title"
                  name={String(titleProp)}
                  onChange={(target) => {
                    handleChange(index, target as any);
                  }}
                  value={String(item[titleProp])}
                />

                {Object.entries(childs).map((a, i) => {
                  const child = a[1] as ChildFunction;
                  return (
                    <div key={i}>
                      {child({
                        label: a[0],
                        name: a[0],
                        onChange: (target) => {
                          handleChange(index, target as any);
                        },
                        value: item[a[0] as K] as any,
                        index,
                      })}
                    </div>
                  );
                })}
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}

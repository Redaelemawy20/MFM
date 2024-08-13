"use client";

import AccordionI, { ChildFunction } from "./interfaces/AccordionI";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import TextFeild from "./Input";
import EnsureTheValueOfKeyIsWithType from "@/ts/common/EnsureTheValueOfKeyIsWithType";
import { MdLibraryAdd } from "react-icons/md";

export default function Accordions<T, K extends keyof T>({
  value: rValue,
  name,
  titleProp,
  childs,
  onChange,
  onValidate,
  onDelete,
  onlyOne = false,
}: AccordionI<T, EnsureTheValueOfKeyIsWithType<T, K, string>>) {
  const value = rValue ? rValue : [];
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
    <div className="flex flex-col gap-2 w-full">
      {/* <MdLibraryAdd className="!ml-auto block " /> */}

      <Accordion selectionMode="single" variant="shadow">
        {value &&
          value.map((item, index) => {
            return (
              <AccordionItem
                title={item[titleProp] ? String(item[titleProp]) : "item"}
                key={index}
                indicator={({ isOpen }) =>
                  !onlyOne && (
                    <span
                      onClick={(e) => {
                        const v = [...value];
                        const fv = v.filter((v, i) => i !== index);
                        onChange({ name, value: fv });
                        onDelete && onDelete(index);
                        onValidate && onValidate({ name, value: fv });
                      }}
                    >
                      delete
                    </span>
                  )
                }
              >
                <div className="flex flex-col">
                  <TextFeild
                    label="title"
                    name={String(titleProp)}
                    onChange={(target) => {
                      handleChange(index, target as any);
                    }}
                    value={item[titleProp]}
                  />

                  {Object.entries(childs(item, index)).map((a, i) => {
                    const child = a[1] as ChildFunction;
                    return (
                      <div key={i} className="w-full">
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
      {!onlyOne && (
        <Button
          color="success"
          className=""
          variant="shadow"
          startContent={<MdLibraryAdd />}
          onClick={() => {
            const v = [...value];
            v.push({} as T);
            onChange({ name, value: v });
            onValidate && onValidate({ name, value: v });
          }}
        >
          add item
        </Button>
      )}
    </div>
  );
}

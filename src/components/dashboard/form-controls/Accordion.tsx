"use client";

import AccordionI from "./interfaces/AccordionI";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { MdLibraryAdd } from "react-icons/md";
import { useFormContext } from "../forms/context/FormContext";
import { HandleChange } from "@/ts/common/HandleChange";

export default function Accordions<T>({
  value: rValue,
  name,
  getTitle,
  childs,

  onChange,
  translatable,
  onlyOne = false,
}: AccordionI<T>) {
  const { lang, handleChangeUpdated } = useFormContext();
  let value;
  if (translatable) {
    value = rValue ? rValue[lang] : [];
  } else {
    value = rValue ?? [];
  }
  value = Array.isArray(value) ? value : [];
  // const value = rValue ? rValue : [];

  const onDelete = (index: number) => {
    const v = [...value];
    const fv = v.filter((v, i) => i !== index);
    handleChangeUpdated(
      Boolean(translatable),
      rValue,
      { name, value: fv },
      onChange
    );
  };
  const onChildChange = (index: number): HandleChange => {
    return ({ name: n, value: v }) => {
      // console.log({ name, v });
      // console.log({ state });
      // console.log(n);

      const clonedValues = [...value];
      const changeItem = { ...clonedValues[index] };
      changeItem[n as keyof T] = v;
      clonedValues[index] = changeItem;
      // console.log({ state });

      handleChangeUpdated(
        Boolean(translatable),
        rValue,
        { name, value: clonedValues },
        onChange
      );
    };
  };
  const onAdd = () => {
    const v = [...value];
    v.push({} as T);
    handleChangeUpdated(
      Boolean(translatable),
      rValue,
      { name, value: v },
      onChange
    );
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* <MdLibraryAdd className="!ml-auto block " /> */}

      <Accordion selectionMode="single" variant="shadow">
        {value &&
          value.map((item, index) => {
            return (
              <AccordionItem
                title={getTitle(item) || "item"}
                key={index}
                indicator={({ isOpen }) =>
                  !onlyOne && (
                    <span onClick={(e) => onDelete(index)}>delete</span>
                  )
                }
              >
                <div className="flex flex-col">
                  {Object.entries(childs(item, onChildChange(index))).map(
                    (a, i) => {
                      const child = a[1] as () => React.ReactNode;
                      return (
                        <div key={i} className="w-full">
                          {child()}
                        </div>
                      );
                    }
                  )}
                </div>
              </AccordionItem>
            );
          })}
      </Accordion>
      {!onlyOne && (
        <Button
          color="success"
          variant="shadow"
          startContent={<MdLibraryAdd />}
          onClick={onAdd}
        >
          add item
        </Button>
      )}
    </div>
  );
}

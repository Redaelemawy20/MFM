"use client";

import { useFormState, useFormStatus } from "react-dom";

import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import FormActionType from "@/ts/Types/FormActionType";

interface FormProps {
  items: { name: string; type?: string }[];
  model: string;
  action: FormActionType;
}

export default function PageCreateForm({ items, action, model }: FormProps) {
  const [formState, formAction] = useFormState(action, { message: "" });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (formState.message === "saved") {
      setOpen(false);
    }
  }, [formState]);

  return (
    <Popover
      placement="left"
      isOpen={open}
      shouldCloseOnInteractOutside={() => true}
      onClose={() => {
        setOpen(false);
      }}
    >
      <PopoverTrigger>
        <Button color="primary" onClick={() => setOpen(!open)}>
          Create a {model}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={formAction}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">{model}</h3>
            {items.map((item, i) => {
              if (item.type && item.type === "area")
                return (
                  <Textarea
                    name={item.name}
                    label={item.name}
                    labelPlacement="outside"
                    placeholder={item.name}
                  />
                );
              else
                return (
                  <Input
                    name={item.name}
                    label={item.name}
                    labelPlacement="outside"
                    placeholder={item.name}
                  />
                );
            })}
            <div>{formState?.message}</div>
            <Button type="submit" className="rounded p-2 bg-blue-500">
              Save
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}

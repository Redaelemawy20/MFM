"use client";
import { useFormState } from "react-dom";
import { ComponentType, useEffect, useState } from "react";
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { FormActionType, HTMLFormAction } from "@/ts/Types/FormActionType";

interface FormModalExtraProps {
  action: HTMLFormAction;
  errorMessage?: string;
}
function withModalForm<T extends FormModalExtraProps>(
  WrappedForm: ComponentType<T>,
  action: FormActionType,
  btnText: string
) {
  return (props: Omit<T, "action" | "errorMessage">) => {
    const [formState, formAction] = useFormState(action, { message: "" });
    const [open, setOpen] = useState(false);
    useEffect(() => {
      if (formState.message === false) {
        setOpen(false);
      }
    }, [formState]);
    const { message } = formState;
    return (
      <Popover
        className="z-50"
        placement="top-end"
        isOpen={open}
        shouldCloseOnInteractOutside={() => true}
        onClose={() => {
          setOpen(false);
        }}
      >
        <PopoverTrigger>
          <Button color="primary" onClick={() => setOpen(!open)}>
            {btnText}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <WrappedForm
            {...(props as T)}
            action={formAction}
            errorMessage={message ?? null}
          />
        </PopoverContent>
      </Popover>
    );
  };
}

export default withModalForm;

"use client";
import { useFormState } from "react-dom";
import { ComponentType, useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalContent } from "@nextui-org/react";
import {
  EditSectionType,
  FormActionType,
  HTMLFormAction,
} from "@/ts/common/FormActionType";
import { ModalHeader } from "react-bootstrap";
import { useRouter } from "next/navigation";

interface FormModalExtraProps {
  action: HTMLFormAction;
  errorMessage?: string;
}
interface Options {
  color?:
    | "primary"
    | "default"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  btnText: string;
  defaultOpen?: boolean;
  width?: "normal" | "full";
  isDismissable?: boolean;
}
function withModalForm<T extends FormModalExtraProps>(
  WrappedForm: ComponentType<T>,
  action: FormActionType | EditSectionType<T>,
  { color, btnText, defaultOpen, width, isDismissable = true }: Options
) {
  return (props: Omit<T, "action" | "errorMessage">) => {
    const [formState, formAction] = useFormState(action as FormActionType, {
      message: "",
    });
    const router = useRouter();
    const [open, setOpen] = useState(defaultOpen || false);
    useEffect(() => {
      if (formState.message === false) {
        setOpen(false);
        router.refresh();
      }
    }, [formState]);
    const { message } = formState;
    return (
      <>
        {isDismissable && (
          <Button
            onPress={() => setOpen(true)}
            color={color ? color : "primary"}
          >
            {btnText}
          </Button>
        )}

        <Modal
          isOpen={open}
          onClose={() => {
            setOpen(false);
          }}
          isDismissable={isDismissable}
          placement="top-center"
          shouldCloseOnInteractOutside={() => true}
          className={`${
            width == "full" ? "!max-w-full" : ""
          }  max-h-[90vh] overflow-y-auto`}
        >
          <ModalContent>
            <ModalHeader className="font-bold p-3 pb-1">{btnText}</ModalHeader>
            <ModalBody>
              <div>
                <WrappedForm
                  {...(props as T)}
                  action={formAction}
                  errorMessage={message ?? null}
                />
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };
}

export default withModalForm;

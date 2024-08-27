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
function withModalForm<T extends FormModalExtraProps>(
  WrappedForm: ComponentType<T>,
  action: FormActionType | EditSectionType<T>,
  btnText: string,
  color?: "primary" | "default" | "secondary" | "success" | "warning" | "danger"
) {
  return (props: Omit<T, "action" | "errorMessage">) => {
    const [formState, formAction] = useFormState(action as FormActionType, {
      message: "",
    });
    const router = useRouter();
    const [open, setOpen] = useState(false);
    useEffect(() => {
      if (formState.message === false) {
        setOpen(false);
        router.refresh();
      }
    }, [formState]);
    const { message } = formState;
    return (
      <>
        <Button onPress={() => setOpen(true)} color={color ? color : "primary"}>
          {btnText}
        </Button>
        <Modal
          isOpen={open}
          onClose={() => {
            setOpen(false);
          }}
          placement="top-center"
          shouldCloseOnInteractOutside={() => true}
        >
          <ModalContent className="max-h-[90vh] overflow-y-auto">
            <ModalHeader className="font-bold p-3 pb-1">{btnText}</ModalHeader>
            <ModalBody>
              <WrappedForm
                {...(props as T)}
                action={formAction}
                errorMessage={message ?? null}
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };
}

export default withModalForm;

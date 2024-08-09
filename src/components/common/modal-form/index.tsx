"use client";
import { useFormState } from "react-dom";
import { ComponentType, useEffect, useState } from "react";
import { Button, Modal, ModalBody, ModalContent } from "@nextui-org/react";
import {
  EditSectionType,
  FormActionType,
  HTMLFormAction,
} from "@/ts/Types/FormActionType";
import { ModalHeader } from "react-bootstrap";

interface FormModalExtraProps {
  action: HTMLFormAction;
  errorMessage?: string;
}
function withModalForm<T extends FormModalExtraProps>(
  WrappedForm: ComponentType<T>,
  action: FormActionType | EditSectionType<T>,
  btnText: string
) {
  return (props: Omit<T, "action" | "errorMessage">) => {
    const [formState, formAction] = useFormState(action as FormActionType, {
      message: "",
    });

    const [open, setOpen] = useState(false);
    useEffect(() => {
      if (formState.message === false) {
        setOpen(false);
      }
    }, [formState]);
    const { message } = formState;
    return (
      <>
        <Button onPress={() => setOpen(true)} color="primary">
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

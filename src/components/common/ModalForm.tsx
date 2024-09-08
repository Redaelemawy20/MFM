"use client";
import { useFormState } from "react-dom";
import React, { ComponentType, useEffect, useState } from "react";
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
  btnText?: string;
  defaultOpen?: boolean;
  width?: string;
  tirgger?: React.ReactElement;
  isDismissable?: boolean;
  onClose?: VoidFunction;
}
function withModalForm<T extends FormModalExtraProps>(
  WrappedForm: ComponentType<T>,
  action: FormActionType | EditSectionType<T>
) {
  return (props: Omit<T, "action" | "errorMessage"> & { options: Options }) => {
    const {
      color,
      btnText,
      defaultOpen,
      width,
      isDismissable = true,
      tirgger,
      onClose,
    } = props.options || {};
    const { options, ...withOutOptions } = props;
    const [formState, formAction] = useFormState(action as FormActionType, {
      message: "",
    });
    const router = useRouter();
    const [open, setOpen] = useState(defaultOpen || false);
    useEffect(() => {
      if (formState.message === false) {
        handleCloseModal();
        router.refresh();
      }
    }, [formState]);

    const { message } = formState;
    let clonedTrigger;
    if (tirgger) {
      clonedTrigger = React.cloneElement(tirgger, {
        onClick: () => {
          setOpen(true);
        },
      });
    }

    const handleCloseModal = () => {
      setOpen(false);
      onClose && onClose();
    };
    return (
      <>
        {isDismissable &&
          (tirgger
            ? clonedTrigger
            : btnText && (
                <Button
                  onPress={() => setOpen(true)}
                  color={color ? color : "primary"}
                >
                  {btnText}
                </Button>
              ))}

        <Modal
          isOpen={open}
          onClose={handleCloseModal}
          isDismissable={isDismissable}
          placement="top-center"
          shouldCloseOnInteractOutside={() => true}
          className={`${
            width ? (width == "full" ? "!max-w-full" : width) : " !max-w-max"
          }  max-h-[90vh] overflow-y-auto z-50`}
        >
          <ModalContent>
            <ModalHeader className="font-bold p-3 pb-1">{btnText}</ModalHeader>
            <ModalBody>
              <div>
                <WrappedForm
                  {...(withOutOptions as any)}
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

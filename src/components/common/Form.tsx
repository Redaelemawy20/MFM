import { HTMLFormAction } from "@/ts/common/FormActionType";
import { ReactNode } from "react";
import { useFormContext } from "../dashboard/forms/context/FormContext";

const Form = ({
  children,
  modifiedAction,
  errorMessage,
}: {
  modifiedAction?: HTMLFormAction;
  children: ReactNode;
  errorMessage?: string;
}) => {
  const { action, errorMessage: message } = useFormContext();
  const error = errorMessage || message;
  return (
    <form
      action={modifiedAction || action}
      className="flex flex-col gap-2 h-[80vh] overflow-y-auto"
    >
      {error ? (
        <div className=" overflow-y-hidden   border !border-danger-600    px-2 py-2 rounded-lg">
          {error}
        </div>
      ) : (
        ""
      )}
      {children}
    </form>
  );
};

export default Form;

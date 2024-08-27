import { HTMLFormAction } from "@/ts/common/FormActionType";
import { ReactNode } from "react";
import { useFormContext } from "../dashboard/forms/context/FormContext";

const Form = ({
  children,
  modifiedAction,
}: {
  modifiedAction?: HTMLFormAction;
  children: ReactNode;
  errorMessage?: string;
}) => {
  const { action, errorMessage } = useFormContext();
  return (
    <form
      action={modifiedAction || action}
      className="flex flex-col w-full gap-2"
    >
      {errorMessage ? (
        <div className=" overflow-y-hidden   border !border-danger-600    px-2 py-2 rounded-lg">
          {errorMessage}
        </div>
      ) : (
        ""
      )}
      {children}
    </form>
  );
};

export default Form;

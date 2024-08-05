import { HTMLFormAction } from "@/ts/Types/FormActionType";
import { ReactNode } from "react";

const Form = ({
  children,
  action,
  errorMessage,
}: {
  action: HTMLFormAction;
  children: ReactNode;
  errorMessage?: string;
}) => {
  return (
    <form action={action} className="flex flex-col w-full gap-2">
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

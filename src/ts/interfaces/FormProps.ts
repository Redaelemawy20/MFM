import { HTMLFormAction } from "../Types/FormActionType";

export default interface FormProps {
  action: HTMLFormAction;
  errorMessage?: string;
}

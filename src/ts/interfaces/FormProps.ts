import { HTMLFormAction } from '../common/FormActionType';

export default interface FormProps {
  action?: HTMLFormAction;
  errorMessage?: string;
  successMessage?: string;
  clearOnSubmit?: boolean;
  isPending?: boolean;
}

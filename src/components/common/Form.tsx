import { ReactNode } from 'react';
import { useFormContext } from '../dashboard/forms/context/FormContext';

const Form = ({
  children,
  modifiedAction,
  errorMessage,
  successMessage,
}: {
  modifiedAction?: (formData?: FormData) => void | VoidFunction;
  children: ReactNode;
  errorMessage?: string;
  successMessage?: string;
}) => {
  const {
    action,
    errorMessage: contextErrorMessage,
    successMessage: contextSuccessMessage,
    files,
    state,
    setState,
    clearOnSubmit,
  } = useFormContext();
  const error = errorMessage || contextErrorMessage;
  const success = successMessage || contextSuccessMessage;
  console.log({ error, success });
  const handleSubmit = async () => {
    const formData = new FormData();
    for (let filename in files) {
      formData.set(filename, files[filename] as File);
    }
    formData.set('data', JSON.stringify({ ...state }));
    if (modifiedAction) {
      await modifiedAction(formData);
    } else {
      await action?.(formData);
    }
    if (clearOnSubmit) setState({});
  };
  return (
    <form
      action={handleSubmit}
      className="flex flex-col gap-2 h-[80vh] overflow-y-auto"
    >
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        {error ? (
          <div className="border !border-danger-600 px-2 py-2  text-danger-600 mb-2">
            {error}
          </div>
        ) : null}
        {success ? (
          <div className="border !border-success-600 bg-success-50 px-2 py-2  text-success-600 mb-2">
            {success}
          </div>
        ) : null}
        {children}
      </div>
    </form>
  );
};

export default Form;

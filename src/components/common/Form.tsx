import { ReactNode } from 'react';
import { useFormContext } from '../dashboard/forms/context/FormContext';

const Form = ({
  children,
  modifiedAction,
  errorMessage,
}: {
  modifiedAction?: (formData?: FormData) => void | VoidFunction;
  children: ReactNode;
  errorMessage?: string;
}) => {
  const {
    action,
    errorMessage: message,
    files,
    state,
    setState,
    clearOnSubmit,
  } = useFormContext();
  const error = errorMessage || message;
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
      {error ? (
        <div className=" overflow-y-hidden   border !border-danger-600    px-2 py-2 rounded-lg">
          {error}
        </div>
      ) : (
        ''
      )}
      {children}
    </form>
  );
};

export default Form;

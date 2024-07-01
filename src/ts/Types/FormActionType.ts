type FormActionType = (
  formState: { message: string | boolean },
  formData: FormData
) => Promise<{ message: string | boolean }> | { message: string | boolean };

export default FormActionType;

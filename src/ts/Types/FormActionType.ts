export type ActionResultType = { message: string | false };

export type FormActionType = (
  formState: ActionResultType,
  formData: FormData
) => Promise<ActionResultType> | ActionResultType;
export type HTMLFormAction = (payload: FormData) => void;

export type ActionResultType = { message: string | false };

export type FormActionType = (
  formState: ActionResultType,
  formData: FormData
) => Promise<ActionResultType> | ActionResultType;
export type EditSectionType<T> = (
  formState: ActionResultType,
  formData: T
) => Promise<ActionResultType> | ActionResultType;
export type HTMLFormAction = (payload: FormData) => void;

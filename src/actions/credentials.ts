import { FormActionType } from "@/ts/common/FormActionType";
import makeAction from "./make-action";
import { signup, SignUpI } from "@/services/authService";

export const enableAccount: FormActionType = async (formState, formData) => {
  const data = JSON.parse(formData.get("data") as string);
  const result = await makeAction(signup, data as SignUpI);
  return result;
};

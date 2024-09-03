"use server";
import { FormActionType } from "@/ts/common/FormActionType";
import makeAction from "./make-action";
import { changeControl, signup, SignUpI } from "@/services/cerdentialService";

export const enableAccount: FormActionType = async (formState, formData) => {
  const data = JSON.parse(formData.get("data") as string);
  const result = await makeAction(signup, data as SignUpI);
  return result;
};

export const changeCerdentialControl: FormActionType = async (
  formState,
  formData
) => {
  const data = JSON.parse(formData.get("data") as string);
  const result = await makeAction(changeControl, data as SignUpI);
  return result;
};

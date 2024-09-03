"use server";
import { FormActionType } from "@/ts/common/FormActionType";
import extractUploadedFiles from "./utils/extract-uploaded-files";
import validateFormData from "./validation";
import { CreateStaffSchema } from "./validation/Schema";
import makeAction from "./make-action";
import { createNewUser, updateUser } from "@/services/userService";
import stroreFiles from "./utils/store-files";

export const handleUserFormSubmit: FormActionType = async (
  formState,
  formData
) => {
  const data = JSON.parse(formData.get("data") as string);
  const [files, dataToStore] = extractUploadedFiles(data);
  const validationResult = validateFormData(CreateStaffSchema, data);
  if (validationResult.message) return validationResult;
  const result = await makeAction(
    data.user_slug ? updateUser : createNewUser,
    dataToStore
  );
  if (result.message) return result;
  const storeFileResult = await stroreFiles(files, formData);
  return storeFileResult;
};

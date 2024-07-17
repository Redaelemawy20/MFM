"use server";
import { EditSectionType, FormActionType } from "@/ts/Types/FormActionType";
import validateFormData from "./validation";
import { addSectionsShecma, createPageSchema } from "./validation/Schema";
import makeAction from "./make-action";
import {
  addSectionsAction,
  createPageAction,
  editSections,
  onPageCreated,
  onSectionAdded,
} from "./make-action/content";
import extractFormData from "./utils/exract-formdata";
import SectionProps from "@/ts/interfaces/SectionProps";
import extractUploadedFiles from "./utils/extract-uploaded-files";
import storeFiles from "./utils/store-files";

export const createPage: FormActionType = async (formState, formData) => {
  const data = extractFormData(formData);
  const validationResult = validateFormData(createPageSchema, data);
  if (validationResult.message) return validationResult;
  const result = await makeAction(createPageAction, data, onPageCreated);
  return result;
};

export const addPageSections: FormActionType = async (formState, formData) => {
  const data = extractFormData(formData);
  const validationResult = validateFormData(addSectionsShecma, data);
  if (validationResult.message) return validationResult;
  const result = await makeAction(addSectionsAction, data, onSectionAdded);
  return result;
};

export const editPageSection: FormActionType = async (formState, formData) => {
  const data = extractFormData(formData);
  const validationResult = validateFormData(addSectionsShecma, data);
  if (validationResult.message) return validationResult;
  const result = await makeAction(addSectionsAction, data, onSectionAdded);
  return result;
};

export const edit: EditSectionType<SectionProps> = async (
  formState,
  formData
) => {
  const data = JSON.parse(formData.get("data"));
  console.log(data);

  const [result, dataToStore] = extractUploadedFiles(data);
  const validationResult = validateFormData("editNav", data);
  if (validationResult.message) return validationResult;
  const updateResult = await makeAction(
    editSections,
    dataToStore,
    onSectionAdded
  );
  if (updateResult.message) return updateResult;
  const storeFileResult = await storeFiles(result, formData);
  return storeFileResult;
};

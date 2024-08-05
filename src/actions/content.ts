"use server";
import { EditSectionType, FormActionType } from "@/ts/Types/FormActionType";
import validateFormData from "./validation";
import {
  addSectionsShecma,
  createPageSchema,
  sortSectionsSchema,
} from "./validation/Schema";
import makeAction from "./make-action";
import {
  addSections,
  createPage as createPageAction,
  editSections,
  onPageCreated,
  onSectionAdded,
  sortSections,
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
  const result = await makeAction(addSections, data, onSectionAdded);
  return result;
};

export const editPageSection: FormActionType = async (formState, formData) => {
  const data = extractFormData(formData);
  const validationResult = validateFormData(addSectionsShecma, data);
  if (validationResult.message) return validationResult;
  const result = await makeAction(addSections, data, onSectionAdded);
  return result;
};

export const sortPageSections: FormActionType = async (formState, formData) => {
  const data = JSON.parse(formData.get("data"));
  const validationResult = validateFormData(sortSectionsSchema, data);
  if (validationResult.message) return validationResult;
  const result = await makeAction(sortSections, data, onSectionAdded);
  return result;
};

export const edit: EditSectionType<SectionProps> = async (
  formState,
  formData
) => {
  const data = JSON.parse(formData.get("data"));
  const schema = formData.get("schema") as any;

  const [result, dataToStore] = extractUploadedFiles(data);
  const validationResult = validateFormData(schema, data);
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

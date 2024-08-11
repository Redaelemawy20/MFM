"use server";
import { EditSectionType, FormActionType } from "@/ts/Types/FormActionType";
import validateFormData from "./validation";
import {
  addSectionsShecma,
  createEntitySchema,
  createPageSchema,
  EditNavSchema,
  NewsSchema,
  sortSectionsSchema,
} from "./validation/Schema";
import makeAction from "./make-action";
import {
  addSections,
  createEntityAction,
  createPage as createPageAction,
  editNewsAction,
  editSections,
  onPageCreated,
  onSectionAdded,
  setEntityLinksAction,
  sortSections,
} from "./make-action/content";
import extractFormData from "./utils/exract-formdata";
import SectionProps from "@/ts/interfaces/SectionProps";
import extractUploadedFiles from "./utils/extract-uploaded-files";
import storeFiles from "./utils/store-files";

export const createEntity: FormActionType = async (formState, formData) => {
  const data = JSON.parse(formData.get("data") as string);
  const [files, dataToStore] = extractUploadedFiles(data);
  const validationResult = validateFormData(createEntitySchema, data);
  if (validationResult.message) return validationResult;
  const result = await makeAction(createEntityAction, dataToStore);
  if (result.message) return result;
  const storeFileResult = await storeFiles(files, formData);
  return storeFileResult;
};

export const createPage: FormActionType = async (formState, formData) => {
  const data = extractFormData(formData);
  const validationResult = validateFormData(createPageSchema, data);
  if (validationResult.message) return validationResult;
  const result = await makeAction(createPageAction, data);
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
  const data = JSON.parse(formData.get("data") as string);
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
  const storeFileResult = await storeFiles(result, formData as any);
  return storeFileResult;
};

export const setEntityLinks: FormActionType = async (formState, formData) => {
  const data = extractFormData(formData) as any;
  const validationResult = validateFormData(EditNavSchema, data.data);
  if (validationResult.message) return validationResult;
  const result = await makeAction(setEntityLinksAction, data);
  return result;
};

export const editNews: FormActionType = async (formState, formData) => {
  const data = JSON.parse(formData.get("data") as string);
  const [files, dataToStore] = extractUploadedFiles(data);
  const validationResult = validateFormData(NewsSchema, data);
  if (validationResult.message) return validationResult;
  const result = await makeAction(editNewsAction, dataToStore);
  if (result.message) return result;
  // console.log(files, "files......................");

  const storeFileResult = await storeFiles(files, formData);
  return storeFileResult;
};

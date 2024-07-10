"use server";
import { FormActionType } from "@/ts/Types/FormActionType";
import validateFormData from "./validation";
import { addSectionsShecma, createPageSchema } from "./validation/Schema";
import makeAction from "./make-action";
import {
  addSectionsAction,
  createPageAction,
  onPageCreated,
  onSectionAdded,
} from "./make-action/content";
import extractFormData from "./utils/exract-formdata";

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

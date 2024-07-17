"use client";
import { editPageSection } from "@/actions/content";
import withModalForm from "@/components/common/modal-form";

const EditSectionButton = (component: any) =>
  withModalForm(component, editPageSection, "Edit Section");
export default EditSectionButton;

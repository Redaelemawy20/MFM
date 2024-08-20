"use client";
import withModalForm from "@/components/common/modal-form";
import { setDisplaySection } from "@/actions/content";
import DisplaySectionForm from "../forms/DisplaySectionForm";

const DisplaySectionModal = withModalForm(
  DisplaySectionForm,
  setDisplaySection,
  "Display Template"
);
export default DisplaySectionModal;

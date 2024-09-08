"use client";
import withModalForm from "@/components/common/ModalForm";
import { setDisplaySection } from "@/actions/content";
import DisplaySectionForm from "../forms/DisplaySectionForm";

const DisplaySectionModal = withModalForm(
  DisplaySectionForm,
  setDisplaySection
);
export default DisplaySectionModal;

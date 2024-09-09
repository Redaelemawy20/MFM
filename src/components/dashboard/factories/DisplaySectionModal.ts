"use client";
import withModalForm from "@/components/common/ModalForm";
import { setDisplaySection } from "@/actions/content";
import DisplaySectionForm from "../forms/dashboard-controls/DisplaySectionForm";

const DisplaySectionModal = withModalForm(
  DisplaySectionForm,
  setDisplaySection
);
export default DisplaySectionModal;

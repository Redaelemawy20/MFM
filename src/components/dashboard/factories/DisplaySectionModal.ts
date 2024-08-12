"use client";
import withModalForm from "@/components/common/modal-form";
import { setEntityLinks } from "@/actions/content";
import NavEdit from "@/components/sections/Nav/NavEdit";
import DisplaySectionForm from "../forms/DisplaySectionForm";

const DisplaySectionModal = withModalForm(
  DisplaySectionForm,
  setEntityLinks,
  "Display Template"
);
export default DisplaySectionModal;

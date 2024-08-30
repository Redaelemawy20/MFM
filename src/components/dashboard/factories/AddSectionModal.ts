"use client";
import { addPageSections } from "@/actions";
import withModalForm from "@/components/common/modal-form";
import AddPageSectionForm from "@/components/dashboard/forms/AddPageSection";
const AddSectionModal = withModalForm(AddPageSectionForm, addPageSections, {
  btnText: "Add Sections",
});
export default AddSectionModal;

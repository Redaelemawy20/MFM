"use client";
import { addPageSections } from "@/actions";
import withModalForm from "@/components/common/ModalForm";
import AddPageSectionForm from "@/components/dashboard/forms/AddPageSection";
const AddSectionModal = withModalForm(AddPageSectionForm, addPageSections);
export default AddSectionModal;

"use client";
import withModalForm from "@/components/common/modal-form";
import { deleteSection } from "@/actions/content";
import DeleteConfirmationForm from "../forms/DeleteConfirmation";

const DeleteSectionModal = withModalForm(
  DeleteConfirmationForm,
  deleteSection,
  "Delete",
  "danger"
);
export default DeleteSectionModal;

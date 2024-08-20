"use client";
import withModalForm from "@/components/common/modal-form";
import { deletePage } from "@/actions/content";
import DeleteConfirmationForm from "../forms/DeleteConfirmation";

const DeletePageModal = withModalForm(
  DeleteConfirmationForm,
  deletePage,
  "Delete",
  "danger"
);
export default DeletePageModal;

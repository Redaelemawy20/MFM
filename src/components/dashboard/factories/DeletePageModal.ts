"use client";
import withModalForm from "@/components/common/ModalForm";
import { deletePage } from "@/actions/content";
import DeleteConfirmationForm from "../forms/DeleteConfirmation";

const DeletePageModal = withModalForm(DeleteConfirmationForm, deletePage, {
  btnText: "Delete",
  color: "danger",
});
export default DeletePageModal;

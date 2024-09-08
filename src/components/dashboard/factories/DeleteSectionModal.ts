"use client";
import withModalForm from "@/components/common/ModalForm";
import { deleteSection } from "@/actions/content";
import DeleteConfirmationForm from "../forms/DeleteConfirmation";

const DeleteSectionModal = withModalForm(DeleteConfirmationForm, deleteSection);
export default DeleteSectionModal;

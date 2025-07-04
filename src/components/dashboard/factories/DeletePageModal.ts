"use client";
import withModalForm from "@/components/common/ModalForm";
import { deletePage } from "@/actions/content";
import DeleteConfirmationForm from "../forms/dashboard-controls/DeleteConfirmation";

const DeletePageModal = withModalForm(DeleteConfirmationForm, deletePage);
export default DeletePageModal;

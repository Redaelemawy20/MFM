"use client";
import withModalForm from "@/components/common/ModalForm";
import StaffForm from "../forms/StaffForm";
import { handleUserFormSubmit } from "@/actions/user";

const CreateStaffModal = withModalForm(StaffForm, handleUserFormSubmit, {
  btnText: "Create New Staff",
});
export default CreateStaffModal;

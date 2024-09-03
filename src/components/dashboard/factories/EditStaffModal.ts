"use client";
import withModalForm from "@/components/common/ModalForm";
import StaffForm from "../forms/StaffForm";

import { handleUserFormSubmit } from "@/actions/user";
const EditStaffModal = withModalForm(StaffForm, handleUserFormSubmit, {
  btnText: "Edit Staff",
  color: "secondary",
});
export default EditStaffModal;

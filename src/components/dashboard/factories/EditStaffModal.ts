"use client";
import withModalForm from "@/components/common/ModalForm";
import StaffForm from "../forms/StaffForm";
import { createStaff } from "@/actions/content";
const EditStaffModal = withModalForm(StaffForm, createStaff, {
  btnText: "Edit Staff",
  color: "secondary",
});
export default EditStaffModal;

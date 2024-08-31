"use client";
import withModalForm from "@/components/common/ModalForm";
import StaffForm from "../forms/StaffForm";
import { createStaff } from "@/actions/content";
const CreateStaffModal = withModalForm(StaffForm, createStaff, {
  btnText: "Create New Staff",
});
export default CreateStaffModal;

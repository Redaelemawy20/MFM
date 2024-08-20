"use client";
import withModalForm from "@/components/common/modal-form";
import StaffForm from "../forms/StaffForm";
import { createStaff } from "@/actions/content";
const EditStaffModal = withModalForm(
  StaffForm,
  createStaff,
  "Edit Staff",
  "secondary"
);
export default EditStaffModal;

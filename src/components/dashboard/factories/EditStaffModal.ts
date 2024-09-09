"use client";
import withModalForm from "@/components/common/ModalForm";
import StaffForm from "../forms/user-managment/StaffForm";

import { handleUserFormSubmit } from "@/actions/user";
const EditStaffModal = withModalForm(StaffForm, handleUserFormSubmit);
export default EditStaffModal;

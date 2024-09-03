"use client";
import withModalForm from "@/components/common/ModalForm";

import UserForm from "../forms/UserForm";
import { handleUserFormSubmit } from "@/actions/user";
const EditUserModal = withModalForm(UserForm, handleUserFormSubmit, {
  btnText: "edit",
  color: "secondary",
});
export default EditUserModal;

"use client";
import withModalForm from "@/components/common/ModalForm";

import UserForm from "../forms/user-managment/UserForm";
import { handleUserFormSubmit } from "@/actions/user";
const EditUserModal = withModalForm(UserForm, handleUserFormSubmit);
export default EditUserModal;

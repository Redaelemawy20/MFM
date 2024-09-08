"use client";
import withModalForm from "@/components/common/ModalForm";

import UserForm from "../forms/UserForm";
import { handleUserFormSubmit } from "@/actions/user";
const AddUserModal = withModalForm(UserForm, handleUserFormSubmit);
export default AddUserModal;

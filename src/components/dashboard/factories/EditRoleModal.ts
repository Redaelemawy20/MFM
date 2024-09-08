"use client";
import withModalForm from "@/components/common/ModalForm";
import { changeCerdentialControl, enableAccount } from "@/actions/credentials";
import RoleForm from "../forms/RoleForm";
const EditRoleModal = withModalForm(RoleForm, changeCerdentialControl);
export default EditRoleModal;

"use client";
import withModalForm from "@/components/common/ModalForm";
import AccountForm from "../forms/user-managment/AccountForm";
import { enableAccount } from "@/actions/credentials";
const NewAccountModal = withModalForm(AccountForm, enableAccount);
export default NewAccountModal;

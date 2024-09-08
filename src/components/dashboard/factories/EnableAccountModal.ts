"use client";
import withModalForm from "@/components/common/ModalForm";
import AccountForm from "../forms/AccountForm";
import { enableAccount } from "@/actions/credentials";
const EnableAccountModal = withModalForm(AccountForm, enableAccount);
export default EnableAccountModal;

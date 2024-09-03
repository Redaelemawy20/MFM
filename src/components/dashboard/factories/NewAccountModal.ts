"use client";
import withModalForm from "@/components/common/ModalForm";
import AccountForm from "../forms/AccountForm";
import { enableAccount } from "@/actions/credentials";
const NewAccountModal = withModalForm(AccountForm, enableAccount, {
  btnText: "New account",
  color: "primary",
});
export default NewAccountModal;

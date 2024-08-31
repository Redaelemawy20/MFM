"use client";
import withModalForm from "@/components/common/ModalForm";

import LoginForm from "../forms/LoginForm";
import { login } from "@/actions/authentication";
const LoginModal = withModalForm(LoginForm, login, {
  btnText: "Login",
  defaultOpen: true,
});
export default LoginModal;

"use client";
import withModalForm from "@/components/common/ModalForm";

import LoginForm from "../forms/user-managment/LoginForm";
import { login } from "@/actions/authentication";
const LoginModal = withModalForm(LoginForm, login);
export default LoginModal;

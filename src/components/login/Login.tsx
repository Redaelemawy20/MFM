import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import MailIcon from "./MailIcon";
import LockIcon from "./LockIcon";
import { signIn } from "@/auth";
import { login } from "@/actions/authentication";
import LoginModal from "../dashboard/factories/LoginModal";

export default function Login() {
  return (
    <>
      <LoginModal />
    </>
  );
}

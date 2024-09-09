"use client";
import Form from "@/components/common/Form";
import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "../form-button/FormButton";
import LockIcon from "@/components/login/LockIcon";
import { Input } from "@nextui-org/react";
import MailIcon from "@/components/login/MailIcon";
import Image from "next/image";

const LoginForm = ({ action, errorMessage }: FormProps) => {
  return (
    <Form modifiedAction={action} errorMessage={errorMessage}>
      <div className="h-full flex flex-col justify-center items-center">
        <Image
          src={"/assets/imgs/logo.png"}
          width={200}
          height={300}
          alt="university logo"
        />
        <Input
          autoFocus
          className="m-2"
          style={{
            backgroundColor: "#fff",
            borderColor: "#e2e8f0",
            borderWidth: "1px",
            borderStyle: "solid",
          }}
          endContent={
            <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
          name="username"
        />

        <Input
          style={{ backgroundColor: "#fff" }}
          endContent={
            <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
          }
          label="Password"
          placeholder="Enter your password"
          type="password"
          variant="bordered"
          name="password"
        />
        <FormButton>Login</FormButton>
      </div>
    </Form>
  );
};

export default LoginForm;

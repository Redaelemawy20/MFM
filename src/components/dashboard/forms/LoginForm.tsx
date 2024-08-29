import Form from "@/components/common/Form";
import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "./form-button/FormButton";
import LockIcon from "@/components/login/LockIcon";
import { Input } from "@nextui-org/react";
import MailIcon from "@/components/login/MailIcon";

const LoginForm = ({ action, errorMessage }: FormProps) => {
  console.log({ errorMessage });

  return (
    <Form modifiedAction={action} errorMessage={errorMessage}>
      <div style={{ marginBottom: "1rem", width: "100%" }}>
        <Input
          autoFocus
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
        />
      </div>
      <Input
        style={{ backgroundColor: "#fff" }}
        endContent={
          <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
        }
        label="Password"
        placeholder="Enter your password"
        type="password"
        variant="bordered"
      />
      <FormButton>Login</FormButton>
    </Form>
  );
};

export default LoginForm;

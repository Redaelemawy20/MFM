import React, { useState, ChangeEvent } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import MailIcon from "./MailIcon";
import LockIcon from "./LockIcon";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (validateEmail(value)) {
      setEmailError("");
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        style={{
          backgroundColor: "var(--secondary-color)",
          color: "#ffffff",
        }}
      >
        Login
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onClose} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody style={{ width: "100%" }}>
                <div style={{ marginBottom: "1rem", width: "100%" }}>
                  <Input
                    autoFocus
                    style={{
                      backgroundColor: "#fff",
                      borderColor: emailError ? "red" : "#e2e8f0",
                      borderWidth: "1px",
                      borderStyle: "solid",
                    }}
                    endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }
                    label="Email"
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    variant="bordered"
                  />
                  {emailError && (
                    <span style={{ color: "red", fontSize: "0.875rem" }}>
                      {emailError}
                    </span>
                  )}
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
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

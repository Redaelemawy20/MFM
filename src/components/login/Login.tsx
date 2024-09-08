import React from "react";

import LoginModal from "../dashboard/factories/LoginModal";

export default function Login() {
  return (
    <>
      <LoginModal
        options={{
          btnText: "Login",
          defaultOpen: true,
          isDismissable: false,
        }}
      />
    </>
  );
}

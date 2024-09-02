"use server";

import { signIn } from "@/auth";
import { FormActionType } from "@/ts/common/FormActionType";

export const login: FormActionType = async function (formState, formData) {
  try {
    await signIn("credentials", {
      redirect: false,
      username: formData.get("username"),
      password: formData.get("password"),
    });

    return {
      message: false,
    };
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === ("CallbackRouteError" || "CredentialsSignin"))
        return {
          message: "error username or password",
        };
    }

    return {
      message: "error while authentication",
    };
  }
};

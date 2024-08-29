"use server";

import { signIn } from "@/auth";
import { FormActionType } from "@/ts/common/FormActionType";

export const login: FormActionType = async function (formState, formData) {
  try {
    const result = await signIn("credentials", {
      redirect: false,
      username: "reda",
      password: "kdhaiwo",
    });

    return {
      message: false,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: "error while authentication",
      };
    }
  }
};

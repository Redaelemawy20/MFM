"use server";

import db from "@/db";
import FormActionType from "@/ts/Types/FormActionType";
const createPage: FormActionType = (formState, formData) => {
  const name = formData.get("name") as string;
  //   await db.page.create({
  //     data: {
  //       name,
  //     },
  //   });
  //   revalidatePath("/dashboard/content");
  return {
    message: true,
  };
};
export default createPage;

"use client";
import { createPage } from "@/actions";
import withModalForm from "@/components/common/modal-form";
import PageCreateForm from "@/components/dashboard/forms/PageCreate";

const CreatePageModal = withModalForm(PageCreateForm, createPage, {
  btnText: "Add Page",
});

export default CreatePageModal;

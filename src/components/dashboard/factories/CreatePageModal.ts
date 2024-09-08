"use client";
import { createPage } from "@/actions";
import withModalForm from "@/components/common/ModalForm";
import PageCreateForm from "@/components/dashboard/forms/PageCreate";

const CreatePageModal = withModalForm(PageCreateForm, createPage);

export default CreatePageModal;

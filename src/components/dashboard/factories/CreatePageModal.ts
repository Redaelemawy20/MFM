"use client";
import { createPage } from "@/actions";
import withModalForm from "@/components/common/ModalForm";
import PageCreateForm from "@/components/dashboard/forms/dashboard-controls/PageCreate";

const CreatePageModal = withModalForm(PageCreateForm, createPage);

export default CreatePageModal;

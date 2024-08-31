"use client";
import withModalForm from "@/components/common/ModalForm";
import EntityForm from "../forms/EntityCreateForm";
import { editEntity } from "@/actions/content";

export const AddEntityModal = withModalForm(EntityForm, editEntity, {
  btnText: "Add Entity",
});

export const EditEntityModal = withModalForm(EntityForm, editEntity, {
  btnText: "Edit",
});

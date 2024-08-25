"use client";
import withModalForm from "@/components/common/modal-form";
import EntityForm from "../forms/EntityCreateForm";
import { editEntity } from "@/actions/content";

export const AddEntityModal = withModalForm(
  EntityForm,
  editEntity,
  "Add Entity"
);

export const EditEntityModal = withModalForm(EntityForm, editEntity, "Edit");

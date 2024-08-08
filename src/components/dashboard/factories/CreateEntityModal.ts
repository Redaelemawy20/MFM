"use client";
import withModalForm from "@/components/common/modal-form";
import EntityCreateForm from "../forms/EntityCreateForm";
import { createEntity } from "@/actions/content";

const CreateEntityModal = withModalForm(
  EntityCreateForm,
  createEntity,
  "Add Entity"
);

export default CreateEntityModal;

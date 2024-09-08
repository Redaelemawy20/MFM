"use client";
import withModalForm from "@/components/common/ModalForm";
import EntityForm from "../forms/EntityCreateForm";
import { editEntity } from "@/actions/content";

export const EntityModal = withModalForm(EntityForm, editEntity);

"use client";
import withModalForm from "@/components/common/ModalForm";
import EntityForm from "../forms/dashboard-controls/EntityCreateForm";
import { editEntity } from "@/actions/content";

export const EntityModal = withModalForm(EntityForm, editEntity);

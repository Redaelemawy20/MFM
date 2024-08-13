"use client";
import withModalForm from "@/components/common/modal-form";
import { editFooterLinks } from "@/actions/content";
import FooterForm from "../forms/FooterForm";

const EditFooterModal = withModalForm(
  FooterForm,
  editFooterLinks,
  "Edit Footer"
);
export default EditFooterModal;

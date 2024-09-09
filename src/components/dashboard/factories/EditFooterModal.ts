"use client";
import withModalForm from "@/components/common/ModalForm";
import { editFooterLinks } from "@/actions/content";
import FooterForm from "../forms/sections-forms/FooterForm";

const EditFooterModal = withModalForm(FooterForm, editFooterLinks);
export default EditFooterModal;

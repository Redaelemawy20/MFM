"use client";
import withModalForm from "@/components/common/ModalForm";
import { editFooterLinks } from "@/actions/content";
import FooterForm from "../forms/FooterForm";

const EditFooterModal = withModalForm(FooterForm, editFooterLinks, {
  btnText: "Edit Footer",
});
export default EditFooterModal;

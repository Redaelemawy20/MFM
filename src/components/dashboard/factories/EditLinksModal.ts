"use client";
import withModalForm from "@/components/common/ModalForm";
import { setEntityLinks } from "@/actions/content";
import NavEdit from "../forms/NavEdit";

const EditLinksModal = withModalForm(NavEdit, setEntityLinks, {
  btnText: "Edit Nav Links",
  color: "danger",
});
export default EditLinksModal;

"use client";
import withModalForm from "@/components/common/ModalForm";
import { setEntityLinks } from "@/actions/content";
import NavEdit from "../forms/NavEdit";

const EditLinksModal = withModalForm(NavEdit, setEntityLinks);
export default EditLinksModal;

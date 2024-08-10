"use client";
import withModalForm from "@/components/common/modal-form";
import { setEntityLinks } from "@/actions/content";
import NavEdit from "@/components/sections/Nav/NavEdit";

const EditLinksModal = withModalForm(NavEdit, setEntityLinks, "Edit Nav Links");
export default EditLinksModal;

"use client";
import withModalForm from "@/components/common/modal-form";
import { editNews } from "@/actions/content";
import NewsForm from "../forms/NewsForm";

const EditNewsModal = withModalForm(NewsForm, editNews, "Create News");
export default EditNewsModal;

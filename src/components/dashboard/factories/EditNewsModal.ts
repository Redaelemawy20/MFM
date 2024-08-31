"use client";
import withModalForm from "@/components/common/ModalForm";
import { editNews } from "@/actions/content";
import NewsForm from "../forms/NewsForm";

export const CreatNews = withModalForm(NewsForm, editNews, {
  btnText: "Add News",
});
export const EditNews = withModalForm(NewsForm, editNews, {
  btnText: "Edit",
  color: "secondary",
});

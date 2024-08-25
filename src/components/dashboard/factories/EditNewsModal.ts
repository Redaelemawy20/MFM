"use client";
import withModalForm from "@/components/common/modal-form";
import { editNews } from "@/actions/content";
import NewsForm from "../forms/NewsForm";

export const CreatNews = withModalForm(NewsForm, editNews, "Add News");
export const EditNews = withModalForm(NewsForm, editNews, "Edit", "secondary");

"use client";
import withModalForm from "@/components/common/ModalForm";
import { editNews } from "@/actions/content";
import NewsForm from "../forms/NewsForm";

export const NewsModal = withModalForm(NewsForm, editNews);

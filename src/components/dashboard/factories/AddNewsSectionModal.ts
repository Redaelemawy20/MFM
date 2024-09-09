"use client";
import withModalForm from "@/components/common/ModalForm";
import { editNews } from "@/actions/content";
import AddNewsSectionForm from "../forms/news-managment/NewsPreview";

export const AddNewsSection = withModalForm(AddNewsSectionForm, editNews);

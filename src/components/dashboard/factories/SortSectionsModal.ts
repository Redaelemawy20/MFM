"use client";
import withModalForm from "@/components/common/ModalForm";
import SortPageSectionForm from "../forms/dashboard-controls/SortSections";
import { sortPageSections } from "@/actions/content";

const SortSectionModal = withModalForm(SortPageSectionForm, sortPageSections);
export default SortSectionModal;

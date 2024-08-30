"use client";
import withModalForm from "@/components/common/modal-form";
import SortPageSectionForm from "../forms/SortSections";
import { sortPageSections } from "@/actions/content";

const SortSectionModal = withModalForm(SortPageSectionForm, sortPageSections, {
  btnText: "Sort Sections",
});
export default SortSectionModal;

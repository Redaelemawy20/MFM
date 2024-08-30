"use client";
import { edit } from "@/actions/content";
import withModalForm from "@/components/common/modal-form";
import HasId from "@/ts/common/HasId";
import FormProps from "@/ts/interfaces/FormProps";
import SectionProps from "@/ts/interfaces/SectionProps";

const EditSectionModal = (
  component: (props: SectionProps & FormProps & HasId) => JSX.Element
) => withModalForm(component, edit, { btnText: "Edit", color: "secondary" });
export default EditSectionModal;

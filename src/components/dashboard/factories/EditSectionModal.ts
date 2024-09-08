"use client";
import { edit } from "@/actions/content";
import withModalForm from "@/components/common/ModalForm";
import HasId from "@/ts/common/HasId";
import FormProps from "@/ts/interfaces/FormProps";
import SectionProps from "@/ts/interfaces/SectionProps";

const EditSectionModal = (
  component: (props: SectionProps & FormProps & HasId) => JSX.Element
) => withModalForm(component, edit);
export default EditSectionModal;

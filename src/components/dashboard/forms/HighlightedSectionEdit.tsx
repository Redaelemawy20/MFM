"use client";
import Form from "@/components/common/Form";
import TextFeild from "@/components/dashboard/form-controls/Input";
import TextArea from "@/components/dashboard/form-controls/TextArea";
import FormButton from "@/components/dashboard/forms/form-button/FormButton";
import FormProps from "@/ts/interfaces/FormProps";
import HighlightedSectionProps, {
  HighlightedSectionData,
} from "@/ts/interfaces/HighlightedSectionProps";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "./context/FormContext";
import LanguageSelect from "../form-controls/LanguageSelect";
import FormPreviewLayout from "@/components/common/FormPreviewLayout";
import DevicesPreview from "@/components/common/DevicesPreview";
import HighlightedSection from "@/sections/HighlightedSection";

interface HighlightedSectionEditI extends HighlightedSectionProps, FormProps {
  id: number;
}
const HighlightedSectionEdit = ({
  id,
  data,
  action,
  errorMessage,
}: HighlightedSectionEditI) => {
  return (
    <FormProvider
      id={id}
      data={data}
      action={action}
      errorMessage={errorMessage}
    >
      <FormElements />
    </FormProvider>
  );
};

export default HighlightedSectionEdit;
interface HighlightedSectionContext extends ContextType {
  state: HighlightedSectionData;
  id: number;
}
const FormElements = () => {
  const { state, action, id, setLang, lang } =
    useFormContext<HighlightedSectionContext>();
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, id }));
  formData.set("schema", "editHighlightedSection");

  const modefiedAction = action.bind(null, formData);
  return (
    <FormPreviewLayout>
      <Form modifiedAction={modefiedAction}>
        <LanguageSelect onChange={setLang} value={lang} />
        <TextFeild
          name="title"
          value={state.title}
          label="Title"
          translatable
        />
        <TextArea
          name="description"
          value={state.description}
          label="Description"
          translatable
        />
        <TextFeild
          name="btnText"
          value={state.btnText}
          label="button Text"
          translatable
        />
        <TextFeild name="path" value={state.path} label="where the button go" />
        <FormButton>Save</FormButton>
      </Form>
      <DevicesPreview lang={lang}>
        <HighlightedSection data={state} />
      </DevicesPreview>
    </FormPreviewLayout>
  );
};

"use client";
import FormProps from "@/ts/interfaces/FormProps";
import TextFeild from "@/components/dashboard/form-controls/Input";

import MultiPointInput from "@/components/dashboard/form-controls/MultiPointInput/MultiPointInput";
import Form from "@/components/common/Form";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "../context/FormContext";
import LanguageSelect from "@/components/dashboard/form-controls/LanguageSelect";
import FormButton from "../form-button/FormButton";

import FormPreviewLayout from "@/components/common/FormPreviewLayout";
import DevicesPreview from "@/components/common/DevicesPreview";

import { StaticContentProps } from "@/ts/interfaces/StaticContentI";
import StaticContent from "@/sections/StaticContent";
import { SubPage } from "@/ts/interfaces/SubPage";

interface StaticContentI extends StaticContentProps, FormProps {
  id: number;
}

const StaticContentEdit = ({
  id,
  data,
  action,
  errorMessage,
}: StaticContentI) => {
  return (
    <FormProvider
      data={data}
      action={action}
      errorMessage={errorMessage}
      id={id}
    >
      <FormElements />
    </FormProvider>
  );
};

export default StaticContentEdit;

interface StaticContentContext extends ContextType {
  state: SubPage;
  id: number;
}
const FormElements = () => {
  const { state, lang, setLang, action, id } =
    useFormContext<StaticContentContext>();
  const formData = new FormData();

  formData.set("data", JSON.stringify({ ...state, id }));
  formData.set("schema", "editAbout");
  const modefiedAction = action.bind(null, formData);
  return (
    <>
      <FormPreviewLayout>
        <Form modifiedAction={modefiedAction}>
          <LanguageSelect value={lang} onChange={setLang} />

          <TextFeild
            name="mainTitle"
            value={state.mainTitle}
            label="Main title"
            translatable
          />
          <TextFeild
            name="subTitle"
            value={state.subTitle}
            label="Sub title"
            translatable
          />

          <MultiPointInput
            label="Lines"
            name="lines"
            value={state.lines}
            translatable
          />

          <FormButton>Save</FormButton>
        </Form>
        <DevicesPreview lang={lang}>
          <StaticContent data={state} />
        </DevicesPreview>
      </FormPreviewLayout>
    </>
  );
};

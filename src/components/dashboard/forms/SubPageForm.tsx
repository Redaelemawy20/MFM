"use client";
import FormProps from "@/ts/interfaces/FormProps";
import Accordions from "../../dashboard/form-controls/Accordion";
import FormButton from "./form-button/FormButton";
import TextFeild from "../../dashboard/form-controls/Input";

import Form from "@/components/common/Form";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "./context/FormContext";
import { SubPageContent, SubPageProps } from "@/ts/interfaces/SubPage";
import LanguageSelect from "../form-controls/LanguageSelect";
import { getValueIn } from "@/utils/trans";
import FormPreviewLayout from "@/components/common/FormPreviewLayout";
import DevicesPreview from "@/components/common/DevicesPreview";
import MultiPointInput from "../form-controls/MultiPointInput/MultiPointInput";
import SubPages from "@/sections/SubPages";
interface SubPageEditI extends SubPageProps, FormProps {
  id: number;
}
const SubPageEdit = ({ id, action, data, errorMessage }: SubPageEditI) => {
  return (
    <FormProvider
      id={id}
      action={action}
      data={data}
      errorMessage={errorMessage}
    >
      <FormElements />
    </FormProvider>
  );
};

export default SubPageEdit;
interface SubPageContext extends ContextType {
  state: SubPageContent;
  id: number;
}
function FormElements() {
  const { state, action, id, setLang, lang } = useFormContext<SubPageContext>();
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, id }));
  formData.set("schema", "editStatistics");

  const modefiedAction = action.bind(null, formData);
  return (
    <FormPreviewLayout>
      <Form modifiedAction={modefiedAction}>
        <LanguageSelect onChange={setLang} value={lang} />

        <Accordions
          name="items"
          getTitle={(item) => getValueIn(item.mainTitle, lang)}
          value={state.items}
          childs={(item, onChange) => ({
            mainTitle: () => (
              <TextFeild
                name="mainTitle"
                label="link"
                value={item.mainTitle}
                onChange={onChange}
                translatable
              />
            ),
            subTitle: () => (
              <TextFeild
                name="subTitle"
                label="title"
                value={item.subTitle}
                onChange={onChange}
                translatable
              />
            ),
            lines: () => (
              <MultiPointInput
                name="lines"
                value={item.lines}
                onChange={onChange}
                translatable
              />
            ),
          })}
        />
        <FormButton>Save</FormButton>
      </Form>
      <DevicesPreview lang={lang}>
        <SubPages data={state} />
      </DevicesPreview>
    </FormPreviewLayout>
  );
}

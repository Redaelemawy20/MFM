"use client";
import FormProps from "@/ts/interfaces/FormProps";
import TextFeild from "@/components/dashboard/form-controls/Input";
import Accordions from "@/components/dashboard/form-controls/Accordion";
import FormButton from "@/components/dashboard/forms/form-button/FormButton";
import TextArea from "@/components/dashboard/form-controls/TextArea";
import Form from "@/components/common/Form";
import WithTabs from "@/components/common/withTabs";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "./context/FormContext";
import { ServiceData, ServicesProps } from "@/ts/interfaces/Service";
import LanguageSelect from "../form-controls/LanguageSelect";
import { getValueIn } from "@/utils/trans";
import FormPreviewLayout from "@/components/common/FormPreviewLayout";
import DevicesPreview from "@/components/common/DevicesPreview";
import Services from "@/sections/Services";

interface ServiceEditI extends ServicesProps, FormProps {
  id: number;
}

const ServiceEdit = ({ id, action, data, errorMessage }: ServiceEditI) => {
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

export default ServiceEdit;

interface ServiceContext extends ContextType {
  state: ServiceData;
  id: number;
}

function FormElements() {
  const { state, action, id, lang, setLang } = useFormContext<ServiceContext>();
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, id }));
  formData.set("schema", "editServices");

  const modefiedAction = action.bind(null, formData);
  return (
    <FormPreviewLayout>
      <Form modifiedAction={modefiedAction}>
        <LanguageSelect value={lang} onChange={setLang} />
        <WithTabs tabs={["Title and caption", "Cards data"]}>
          <>
            <TextFeild
              name="title"
              value={state.title}
              label="Title"
              translatable
            />
            <TextFeild
              name="caption"
              value={state.caption}
              label="Caption"
              translatable
            />
          </>
          <Accordions
            name="cardsData"
            getTitle={(item) => getValueIn(item.title, lang)}
            value={state.cardsData}
            childs={(item, onChange) => ({
              title: () => (
                <TextFeild
                  name="title"
                  label="title"
                  value={item.title}
                  onChange={onChange}
                  translatable
                />
              ),
              description: () => (
                <TextArea
                  name="description"
                  label="description"
                  value={item.description}
                  onChange={onChange}
                  translatable
                />
              ),
            })}
          />
        </WithTabs>

        <FormButton>Submit</FormButton>
      </Form>
      <DevicesPreview lang={lang}>
        <Services data={state} />
      </DevicesPreview>
    </FormPreviewLayout>
  );
}

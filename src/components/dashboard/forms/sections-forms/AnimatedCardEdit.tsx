"use client";
import Accordions from "@/components/dashboard/form-controls/Accordion";
import TextFeild from "@/components/dashboard/form-controls/Input";

import TextArea from "@/components/dashboard/form-controls/TextArea";
import CardWithAnimationProps, {
  CardWithAnimationData,
} from "@/ts/interfaces/CardWithAnimation";
import FormProps from "@/ts/interfaces/FormProps";

import FormButton from "@/components/dashboard/forms/form-button/FormButton";
import Form from "@/components/common/Form";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "../context/FormContext";
import LanguageSelect from "../../form-controls/LanguageSelect";
import { getValueIn } from "@/utils/trans";
import DevicesPreview from "@/components/common/DevicesPreview";
import AnimatedCard from "@/sections/AnimatedCard";
import FormPreviewLayout from "@/components/common/FormPreviewLayout";
import IconSelector from "../../form-controls/IconSelector";

interface CardWithAnimationEditI extends CardWithAnimationProps, FormProps {
  id: number;
}
const CardWithAnimationEdit = ({
  id,
  data,
  action,
  errorMessage,
}: CardWithAnimationEditI) => {
  return (
    <FormProvider
      action={action}
      data={data}
      errorMessage={errorMessage}
      id={id}
    >
      <FormElements />
    </FormProvider>
  );
};

export default CardWithAnimationEdit;

interface CardWithAnimationContext extends ContextType {
  state: CardWithAnimationData;
  id: number;
}
const FormElements = () => {
  const { state, handleChange, files, id, action, lang, setLang } =
    useFormContext<CardWithAnimationContext>();
  const formData = new FormData();
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  formData.set("data", JSON.stringify({ ...state, id }));
  formData.set("schema", "editCardWithAnimation");
  const modefiedAction = action.bind(null, formData);
  return (
    <FormPreviewLayout>
      <Form modifiedAction={modefiedAction}>
        <LanguageSelect onChange={setLang} value={lang} />
        <TextFeild
          name="title"
          label="section title"
          value={state.title}
          translatable
        />
        <Accordions
          name="items"
          value={state.items}
          onChange={handleChange}
          getTitle={(item) => getValueIn(item.title, lang)}
          childs={(item, onChange) => ({
            icon: () => (
              <IconSelector name="icon" value={item.icon} onChange={onChange} />
            ),
            title: () => (
              <TextFeild
                name="title"
                label="title"
                value={item.title}
                onChange={onChange}
                translatable
              />
            ),
            path: () => (
              <TextFeild
                name="path"
                label="path"
                value={item.path}
                onChange={onChange}
              />
            ),
            description: () => (
              <TextArea
                name="description"
                label="description"
                value={item.description}
                translatable
                onChange={onChange}
              />
            ),
          })}
        />
        <FormButton>Save</FormButton>
      </Form>
      <DevicesPreview lang={lang}>
        <AnimatedCard data={state} />
      </DevicesPreview>
    </FormPreviewLayout>
  );
};

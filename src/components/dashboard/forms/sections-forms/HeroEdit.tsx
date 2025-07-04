"use client";
import Accordions from "@/components/dashboard/form-controls/Accordion";
import ImageUploadPerview from "@/components/dashboard/form-controls/ImageUploadPerview";
import HeroProps, { HeroDataType } from "@/ts/interfaces/HeroSectionProps";
import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "@/components/dashboard/forms/form-button/FormButton";
import TextArea from "@/components/dashboard/form-controls/TextArea";
import Form from "@/components/common/Form";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "@/components/dashboard/forms/context/FormContext";
import TextFeild from "@/components/dashboard/form-controls/Input";
import LanguageSelect from "@/components/dashboard/form-controls/LanguageSelect";
import { getValueIn } from "@/utils/trans";
import Hero from "@/sections/Hero";

import DevicesPreview from "@/components/common/DevicesPreview";
import FormPreviewLayout from "@/components/common/FormPreviewLayout";
console.log("herooooooooooooooooo");

interface HeroContext extends ContextType {
  state: HeroDataType;
}
interface HeroEditI extends HeroProps, FormProps {
  id: number;
}
const HeroEdit = ({ id, action, data, errorMessage }: HeroEditI) => {
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

export default HeroEdit;

const FormElements = () => {
  const { state, action, files, id, lang, setLang } =
    useFormContext<HeroContext>();
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, id }));
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }

  formData.set("schema", "editHero");
  const modifiedAction = action.bind(null, formData);

  return (
    <FormPreviewLayout>
      <Form modifiedAction={modifiedAction}>
        <LanguageSelect value={lang} onChange={setLang} />
        <Accordions
          btnText="add a slide"
          name="items"
          getTitle={(item) => getValueIn(item.title, lang)}
          value={state.items}
          childs={(child, onChange) => ({
            backgroundImage: () => (
              <ImageUploadPerview
                name="backgroundImage"
                value={child.backgroundImage}
                onChange={onChange}
              />
            ),
            title: () => (
              <TextFeild
                name="title"
                label="title"
                value={child.title}
                onChange={onChange}
                translatable
              />
            ),

            description: () => {
              return (
                <TextArea
                  name="description"
                  value={child.description}
                  label="add description"
                  onChange={onChange}
                  translatable
                />
              );
            },
            readMoreLink: () => {
              return (
                <TextFeild
                  name="readMoreLink"
                  value={child.readMoreLink}
                  label="Link of read more button if exist"
                  onChange={onChange}
                />
              );
            },
          })}
        />
        <FormButton>Submit</FormButton>
      </Form>
      <DevicesPreview lang={lang}>
        <Hero data={state} />
      </DevicesPreview>
    </FormPreviewLayout>
  );
};

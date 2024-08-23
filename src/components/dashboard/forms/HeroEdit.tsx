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
    <Form modifiedAction={modifiedAction}>
      <LanguageSelect value={lang} onChange={setLang} />
      <Accordions
        name="items"
        translatable
        // titleProp={{ name: "title" }}
        getTitle={() => ""}
        value={state.items}
        childs={(child, onChange) => ({
          title: () => (
            <TextFeild
              name="title"
              label="title"
              value={child.title}
              onChange={onChange}
            />
          ),
          backgroundImage: () => (
            <ImageUploadPerview
              name="backgroundImage"
              value={child.backgroundImage}
              onChange={onChange}
            />
          ),
          description: () => {
            return (
              <TextArea
                name="description"
                value={child.description}
                label="add description"
                onChange={onChange}
              />
            );
          },
        })}
      />
      <FormButton>Submit</FormButton>
    </Form>
  );
};

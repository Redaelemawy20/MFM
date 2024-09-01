"use client";
import FormProps from "@/ts/interfaces/FormProps";
import TextFeild from "@/components/dashboard/form-controls/Input";
import ImageUploadPerview from "@/components/dashboard/form-controls/ImageUploadPerview";
import TextArea from "@/components/dashboard/form-controls/TextArea";
import MultiPointInput from "@/components/dashboard/form-controls/MultiPointInput/MultiPointInput";
import WithTabs from "@/components/common/withTabs";
import Form from "@/components/common/Form";
import { FormProvider, useFormContext } from "./context/FormContext";
import LanguageSelect from "@/components/dashboard/form-controls/LanguageSelect";
import FormButton from "./form-button/FormButton";
import { AboutProps } from "@/ts/interfaces/About";
import FormPreviewLayout from "@/components/common/FormPreviewLayout";
import DevicesPreview from "@/components/common/DevicesPreview";
import About from "@/sections/About";

interface AboutEditPropsI extends AboutProps, FormProps {
  id: number;
}

const AboutEdit = ({ id, data, action, errorMessage }: AboutEditPropsI) => {
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

export default AboutEdit;

const FormElements = () => {
  const { state, lang, setLang, action, files, id } = useFormContext();
  const formData = new FormData();
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  formData.set("data", JSON.stringify({ ...state, id }));
  formData.set("schema", "editAbout");
  const modefiedAction = action.bind(null, formData);
  return (
    <>
      <FormPreviewLayout>
        <Form modifiedAction={modefiedAction}>
          <LanguageSelect value={lang} onChange={setLang} />
          <WithTabs tabs={["View image", "Titles", "Captions", "List"]}>
            <ImageUploadPerview name="viewImg" value={state.viewImg} />
            <>
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
            </>
            <>
              <TextArea
                name="caption"
                value={state.caption}
                translatable
                label="Caption"
              />

              <TextFeild
                name="subCaption"
                value={state.subCaption}
                label="Sub capiton"
                translatable
              />
              <TextFeild
                name="endCaption"
                value={state.endCaption}
                translatable
                label="End caption"
              />
            </>
            <MultiPointInput
              label="List"
              name="list"
              value={state.list}
              translatable
            />
          </WithTabs>
          <FormButton>Save</FormButton>
        </Form>
        <DevicesPreview lang={lang}>
          <About data={state} />
        </DevicesPreview>
      </FormPreviewLayout>
    </>
  );
};

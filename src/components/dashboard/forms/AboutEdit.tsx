import FormProps from "@/ts/interfaces/FormProps";
import { AboutProps } from "../../sections/About/index";
import TextFeild from "@/components/dashboard/form-controls/Input";
import ImageUploadPerview from "@/components/dashboard/form-controls/ImageUploadPerview";
import TextArea from "@/components/dashboard/form-controls/TextArea";
import MultiPointInput from "@/components/dashboard/form-controls/MultiPointInput/MultiPointInput";
import WithTabs from "@/components/common/withTabs";
import Form from "@/components/common/Form";
import { FormProvider, useFormContext } from "./context/FormContext";
import LanguageSelect from "@/components/dashboard/form-controls/LanguageSelect";

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
  const { state, lang, setLang, action, errorMessage, files, id } =
    useFormContext();
  const formData = new FormData();
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  formData.set("data", JSON.stringify({ ...state, id }));
  const modefiedAction = action.bind(null, formData);
  return (
    <>
      <Form modifiedAction={modefiedAction}>
        <LanguageSelect value={lang} onChange={setLang} />
        <WithTabs tabs={["View image", "Titles", "Captions", "List"]}>
          <ImageUploadPerview
            name="viewImg"
            value={state.viewImg}
            translatable
          />
          <>
            <TextFeild
              name="mainTitle"
              value={state.mainTitle}
              label="Main title"
            />
            <TextFeild
              name="subTitle"
              value={state.subTitle}
              label="Sub title"
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
      </Form>
    </>
  );
};

import FormProps from "@/ts/interfaces/FormProps";

import TextFeild from "@/components/dashboard/form-controls/Input";
import FormButton from "@/components/dashboard/forms/form-button/FormButton";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "@/components/dashboard/forms/context/FormContext";
import LanguageSelect from "@/components/dashboard/form-controls/LanguageSelect";
import { MainTitleData, MainTitleI } from "@/ts/models/MainTiltel";
import Form from "@/components/common/Form";

interface MainTitleEditI extends MainTitleI, FormProps {
  id: number;
}

const MainTitleEdit = ({ id, action, data, errorMessage }: MainTitleEditI) => {
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
interface MainTitleContext extends ContextType {
  state: MainTitleData;
  id: number;
}
const FormElements = () => {
  const { state, lang, setLang, action, id } =
    useFormContext<MainTitleContext>();
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, id }));
  formData.set("schema", "editMainTitle");
  const modefiedAction = action.bind(null, formData);
  return (
    <>
      <Form modifiedAction={modefiedAction}>
        <LanguageSelect value={lang} onChange={setLang} />
        <TextFeild
          name="mainTitle"
          value={state.mainTitle}
          label="Main Title"
          translatable
        />
        <TextFeild
          name="caption"
          value={state.caption}
          label="Caption"
          translatable
        />
        <FormButton>Save</FormButton>
      </Form>
    </>
  );
};
export default MainTitleEdit;

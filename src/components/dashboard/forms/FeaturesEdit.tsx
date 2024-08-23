import FormProps from "@/ts/interfaces/FormProps";

import useStateManager from "@/hooks/useStateManager";
import ImageUploadPerview from "@/components/dashboard/form-controls/ImageUploadPerview";
import Accordions from "@/components/dashboard/form-controls/Accordion";
import TextArea from "@/components/dashboard/form-controls/TextArea";
import TextAreaI from "@/components/dashboard/form-controls/interfaces/TextAreaI";
import FormButton from "@/components/dashboard/forms/form-button/FormButton";
import Form from "@/components/common/Form";
import WithTabs from "@/components/common/withTabs";
import { FeaturesData, FeaturesProps } from "@/ts/models/Feature";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "./context/FormContext";
import TextFeild from "../form-controls/Input";

interface FeaturesEditI extends FeaturesProps, FormProps {
  id: number;
}
const FeaturesEdit = ({ id, action, data, errorMessage }: FeaturesEditI) => {
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

export default FeaturesEdit;

interface FeaturesContext extends ContextType {
  state: FeaturesData;
  id: number;
}

function FormElements() {
  const { state, files, id, action } = useFormContext<FeaturesContext>();
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, id }));
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  formData.set("schema", "editFeatures");

  const modefiedAction = action.bind(null, formData);
  return (
    <Form modifiedAction={modefiedAction}>
      <WithTabs tabs={["Main image", "Features list"]}>
        <ImageUploadPerview name="mainImg" value={state.mainImg} />
        <Accordions
          name="featuresItems"
          value={state.featuresItems}
          getTitle={(item) => item.title}
          childs={(item, onChange) => ({
            title: () => (
              <TextFeild
                name="title"
                label="title label"
                value={item.title}
                onChange={onChange}
              />
            ),
            description: () => (
              <TextArea
                name="description"
                label="description label"
                value={item.description}
                onChange={onChange}
              />
            ),
          })}
        />
      </WithTabs>
      <FormButton>Save</FormButton>
    </Form>
  );
}

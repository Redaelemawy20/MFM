"use client";
import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "./form-button/FormButton";
import TextFeild from "../form-controls/Input";

import TextArea from "../form-controls/TextArea";
import ImageUploadPerview from "../form-controls/ImageUploadPerview";
import Form from "@/components/common/Form";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "./context/FormContext";
import Entity from "@/ts/models/Entity";

export default function EntityCreateForm({ action, errorMessage }: FormProps) {
  const data = {
    name: "",
    description: "",
    logo: { _s: "" },
  };
  return (
    <FormProvider data={data} action={action} errorMessage={errorMessage}>
      <FormElements />
    </FormProvider>
  );
}

interface EntityContextType extends ContextType {
  state: Entity;
}
function FormElements() {
  const { state, files, action } = useFormContext<EntityContextType>();
  const formData = new FormData();
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  formData.set("data", JSON.stringify({ ...state }));
  const modefiedAction = action.bind(null, formData);

  return (
    <Form modifiedAction={modefiedAction}>
      <ImageUploadPerview
        value={state.logo}
        name="logo"
        btnText="Upload Logo"
      />
      <TextFeild label="Entity Name" value={state.name} name="name" />
      <TextArea
        label="Description - will help in search"
        name="description"
        value={state.description}
      />
      <FormButton>Save</FormButton>
    </Form>
  );
}

"use client";
import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "./FormButton";
import TextFeild from "../form-controls/Input";
import useStateManager from "@/hooks/useStateManager";
import TextArea from "../form-controls/TextArea";
import ImageUploadPerview from "../form-controls/ImageUploadPerview";
import Form from "@/components/common/Form";

export default function EntityCreateForm({ action, errorMessage }: FormProps) {
  const { state, files, handleChange, onUpload, onRemove } = useStateManager({
    name: "",
    description: "",
    logo: { _s: "" },
  });
  const formData = new FormData();
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  formData.set("data", JSON.stringify({ ...state }));
  const modefiedAction = action.bind(null, formData);
  return (
    <Form action={modefiedAction} errorMessage={errorMessage}>
      <ImageUploadPerview
        value={state.logo}
        name="logo"
        onChange={handleChange}
        onUpload={onUpload}
        onRemove={onRemove}
        btnText="Upload Logo"
      />
      <TextFeild
        label="Entity Name"
        value={state.name}
        name="name"
        onChange={handleChange}
      />
      <TextArea
        label="Description - will help in search"
        value={state.description}
        name="description"
        onChange={handleChange}
      />
      <FormButton>Save</FormButton>
    </Form>
  );
}

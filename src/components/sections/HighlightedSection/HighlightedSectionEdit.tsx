import Form from "@/components/common/Form";
import TextFeild from "@/components/dashboard/form-controls/Input";
import TextArea from "@/components/dashboard/form-controls/TextArea";
import FormButton from "@/components/dashboard/forms/FormButton";
import useStateManager from "@/hooks/useStateManager";
import FormProps from "@/ts/interfaces/FormProps";
import HighlightedSectionProps from "@/ts/interfaces/HighlightedSectionProps";

interface HighlightedSectionEditI extends HighlightedSectionProps, FormProps {
  id: number;
}
const HighlightedSectionEdit = ({
  id,
  data,
  action,
  errorMessage,
}: HighlightedSectionEditI) => {
  const { state, handleChange, onUpload, onRemove } = useStateManager(data);
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, id }));
  formData.set("schema", "editHighlightedSection");

  const modefiedAction = action.bind(null, formData);

  return (
    <Form action={modefiedAction} errorMessage={errorMessage}>
      <TextFeild
        name="title"
        value={state.title}
        onChange={handleChange}
        label="Title"
      />
      <TextArea
        name="description"
        value={state.description}
        onChange={handleChange}
        label="Description"
      />
      <TextFeild
        name="btnText"
        value={state.btnText}
        onChange={handleChange}
        label="Button Text"
      />
      <TextFeild
        name="path"
        value={state.path}
        onChange={handleChange}
        label="path"
      />
      <FormButton>Save</FormButton>
    </Form>
  );
};

export default HighlightedSectionEdit;

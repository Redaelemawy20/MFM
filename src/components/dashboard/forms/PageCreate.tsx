import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "./FormButton";
import Form from "@/components/common/Form";
import TextFeild from "../form-controls/Input";
import useStateManager from "@/hooks/useStateManager";
interface PageCreateFormI extends FormProps {
  entity_slug: string;
}

export default function PageCreateForm({
  entity_slug,
  action,
  errorMessage,
}: PageCreateFormI) {
  const { state, handleChange } = useStateManager({
    name: "",
  });
  const formData = new FormData();
  formData.set("name", state.name);
  formData.set("entity_slug", entity_slug);
  const modefiedAction = action.bind(null, formData);
  return (
    <Form action={modefiedAction} errorMessage={errorMessage}>
      <TextFeild
        label="Page Name"
        value={state.name}
        name="name"
        onChange={handleChange}
      />

      <FormButton>Save</FormButton>
    </Form>
  );
}

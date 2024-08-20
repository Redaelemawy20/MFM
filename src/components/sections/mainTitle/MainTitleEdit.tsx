import FormProps from "@/ts/interfaces/FormProps";
import { MainTitleI } from "./MainTitle";
import useStateManager from "@/hooks/useStateManager";
import TextFeild from "@/components/dashboard/form-controls/Input";
import Form from "@/components/common/Form";
import FormButton from "@/components/dashboard/forms/FormButton";

interface MainTitleEditI extends MainTitleI, FormProps {
  id: number;
}

const MainTitleEdit = ({ id, action, data, errorMessage }: MainTitleEditI) => {
  const { state, handleChange } = useStateManager(data);
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, id }));
  formData.set("schema", "editMainTitle");
  const modefiedAction = action.bind(null, formData);

  return (
    <Form action={modefiedAction} errorMessage={errorMessage}>
      <TextFeild
        name="mainTitle"
        value={state.mainTitle}
        label="Main Title"
        onChange={handleChange}
      />
      <TextFeild
        name="caption"
        value={state.caption}
        label="Caption"
        onChange={handleChange}
      />
      <FormButton>Save</FormButton>
    </Form>
  );
};

export default MainTitleEdit;

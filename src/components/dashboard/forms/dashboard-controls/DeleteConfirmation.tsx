"use client";

import Form from "@/components/common/Form";
import useStateManager from "@/hooks/useStateManager";
import FormProps from "@/ts/interfaces/FormProps";
import TextFeild from "../../form-controls/Input";
import FormButton from "../form-button/FormButton";

interface DeleteConfirmationFormI extends FormProps {
  item_name: string;
  id: number;
}
const DeleteConfirmationForm = ({
  id,
  action,
  item_name,
  errorMessage,
}: DeleteConfirmationFormI) => {
  const { state, handleChange } = useStateManager({
    name: "",
  });
  const formData = new FormData();
  formData.set("id", String(id));
  const modefiedAction = action.bind(null, formData);
  return (
    <Form modifiedAction={modefiedAction} errorMessage={errorMessage}>
      <p>Are you sure you want to delete this item</p>
      <strong className="text-danger-500">
        write this name agian: (
        <span className="shadow-lg text-stone-950">{item_name}</span>) and click
        Delete
      </strong>
      <TextFeild
        label="Name"
        value={state.name}
        name="name"
        onChange={handleChange}
      />

      <FormButton disabled={item_name !== state.name}>Delete</FormButton>
    </Form>
  );
};

export default DeleteConfirmationForm;

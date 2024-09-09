import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "../form-button/FormButton";
import Form from "@/components/common/Form";
import TextFeild from "../../form-controls/Input";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "../context/FormContext";
import React from "react";

interface AccountFormI extends FormProps {
  user?: { id: number; slug: string };
}

export default function AccountForm({
  action,
  user,
  errorMessage,
}: AccountFormI) {
  return (
    <FormProvider action={action} data={user || {}} errorMessage={errorMessage}>
      <FormElements />
    </FormProvider>
  );
}
interface CerdentialsContext extends ContextType {
  state: { username: string; password: string; id: number };
}

function FormElements() {
  const { state, action } = useFormContext<CerdentialsContext>();

  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, userId: state.id }));

  const modefiedAction = action.bind(null, formData);

  return (
    <Form modifiedAction={modefiedAction}>
      <TextFeild label="Username" value={state.username} name="username" />
      <TextFeild
        label="Create a strong password form 6 to 12 number or letter"
        value={state.password}
        name="password"
      />
      <FormButton>Save</FormButton>
    </Form>
  );
}

import FormProps from "@/ts/interfaces/FormProps";
import { StatisticsProps } from "./Statistics";
import useStateManager from "@/hooks/useStateManager";
import Accordions from "../../dashboard/form-controls/Accordion";
import FormButton from "../../dashboard/forms/FormButton";
import TextFeild from "../../dashboard/form-controls/Input";
import InputI from "../../dashboard/form-controls/interfaces/InputI";
import TextArea from "../../dashboard/form-controls/TextArea";
import TextAreaI from "../../dashboard/form-controls/interfaces/TextAreaI";
import Form from "@/components/common/Form";

interface StatisticsEditI extends StatisticsProps, FormProps {
  id: number;
}

const StatisticsEdit = ({
  id,
  action,
  data,
  errorMessage,
}: StatisticsEditI) => {
  const { state, handleChange } = useStateManager(data);
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, id }));
  formData.set("schema", "editStatistics");

  const modefiedAction = action.bind(null, formData);

  return (
    <Form action={modefiedAction} errorMessage={errorMessage}>
      <Accordions
        name="items"
        titleProp="subtitle"
        value={state.items}
        onChange={handleChange}
        childs={{
          num: (props) => <TextFeild {...(props as InputI)} />,
          description: (props) => <TextArea {...(props as TextAreaI)} />,
        }}
      />
      <FormButton>Save</FormButton>
    </Form>
  );
};

export default StatisticsEdit;

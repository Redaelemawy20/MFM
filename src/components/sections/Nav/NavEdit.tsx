import TextFeild from "@/components/dashboard/form-controls/Input";
import useStateManager from "@/hooks/useStateManager";
import FormProps from "@/ts/interfaces/FormProps";
import NavProps from "@/ts/interfaces/NavPops";
import Accordions from "../../dashboard/form-controls/Accordion";
import InputI from "@/components/dashboard/form-controls/interfaces/InputI";
import FormButton from "@/components/dashboard/forms/FormButton";
import Form from "@/components/common/Form";

interface NavEditPropsI extends NavProps, FormProps {
  id: number;
}
const NavEdit = ({ id, data, action, errorMessage }: NavEditPropsI) => {
  const { state, handleChange } = useStateManager(data);
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, id }));
  formData.set("schema", "editNav");
  const modefiedAction = action.bind(null, formData);

  return (
    <Form action={modefiedAction} errorMessage={errorMessage}>
      <TextFeild
        label="Top Start Text"
        name="start"
        value={state.start}
        onChange={handleChange}
      />
      <TextFeild
        label="Top End Text"
        name="end"
        value={state.end}
        onChange={handleChange}
      />
      <Accordions
        name="items"
        value={state.items}
        onChange={handleChange}
        titleProp="href"
        childs={{
          name: (props) => <TextFeild {...(props as InputI)} />,
        }}
      />
      <FormButton>Save</FormButton>
    </Form>
  );
};

export default NavEdit;

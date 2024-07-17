import TextFeild from "@/components/dashboard/form-controls/Input";
import useStateManager from "@/hooks/useStateManager";
import FormProps from "@/ts/interfaces/FormProps";
import NavProps from "@/ts/interfaces/NavPops";
import Accordions from "../../dashboard/form-controls/Accordion";
import InputI from "@/components/dashboard/form-controls/interfaces/InputI";
import FormButton from "@/components/dashboard/forms/FormButton";

interface NavEditPropsI extends NavProps, FormProps {
  id: number;
}
const NavEdit = ({ id, data, action, errorMessage }: NavEditPropsI) => {
  const { state, handleChange } = useStateManager(data);
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, id }));
  const modefiedAction = action.bind(null, formData);

  console.log({ errorMessage });

  return (
    <form action={modefiedAction}>
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
    </form>
  );
};

export default NavEdit;

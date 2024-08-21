import FormProps from "@/ts/interfaces/FormProps";
import { ServicesProps } from "./Services";
import useStateManager from "@/hooks/useStateManager";
import TextFeild from "@/components/dashboard/form-controls/Input";
import Accordions from "@/components/dashboard/form-controls/Accordion";
import FormButton from "@/components/dashboard/forms/FormButton";
import TextArea from "@/components/dashboard/form-controls/TextArea";
import TextAreaI from "@/components/dashboard/form-controls/interfaces/TextAreaI";
import Form from "@/components/common/Form";
import WithTabs from "@/components/common/withTabs";

interface ServiceEditI extends ServicesProps, FormProps {
  id: number;
}

const ServiceEdit = ({ id, action, data, errorMessage }: ServiceEditI) => {
  const { state, handleChange } = useStateManager(data);
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, id }));
  formData.set("schema", "editServices");

  const modefiedAction = action.bind(null, formData);
  return (
    <Form action={modefiedAction} errorMessage={errorMessage}>
      <WithTabs tabs={["Title and caption", "Cards data"]}>
        <>
          <TextFeild
            name="title"
            value={state.title}
            label="Title"
            onChange={handleChange}
          />
          <TextFeild
            name="caption"
            value={state.caption}
            label="Caption"
            onChange={handleChange}
          />
        </>
        <Accordions
          name="cardsData"
          titleProp={"title"}
          value={state.cardsData}
          onChange={handleChange}
          childs={() => ({
            description: (props) => <TextArea {...(props as TextAreaI)} />,
          })}
        />
      </WithTabs>

      <FormButton>Submit</FormButton>
    </Form>
  );
};

export default ServiceEdit;

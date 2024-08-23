import FormProps from "@/ts/interfaces/FormProps";
import TextFeild from "@/components/dashboard/form-controls/Input";
import Accordions from "@/components/dashboard/form-controls/Accordion";
import FormButton from "@/components/dashboard/forms/form-button/FormButton";
import TextArea from "@/components/dashboard/form-controls/TextArea";
import Form from "@/components/common/Form";
import WithTabs from "@/components/common/withTabs";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "./context/FormContext";
import { ServiceData, ServicesProps } from "@/ts/models/Service";

interface ServiceEditI extends ServicesProps, FormProps {
  id: number;
}

const ServiceEdit = ({ id, action, data, errorMessage }: ServiceEditI) => {
  return (
    <FormProvider
      id={id}
      action={action}
      data={data}
      errorMessage={errorMessage}
    >
      <FormElements />
    </FormProvider>
  );
};

export default ServiceEdit;

interface ServiceContext extends ContextType {
  state: ServiceData;
  id: number;
}

function FormElements() {
  const { state, action, id } = useFormContext<ServiceContext>();
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, id }));
  formData.set("schema", "editServices");

  const modefiedAction = action.bind(null, formData);
  return (
    <Form modifiedAction={modefiedAction}>
      <WithTabs tabs={["Title and caption", "Cards data"]}>
        <>
          <TextFeild name="title" value={state.title} label="Title" />
          <TextFeild name="caption" value={state.caption} label="Caption" />
        </>
        <Accordions
          name="cardsData"
          getTitle={() => ""}
          value={state.cardsData}
          childs={(item, onChange) => ({
            title: () => (
              <TextFeild
                name="title"
                label="title"
                value={item.title}
                onChange={onChange}
              />
            ),
            description: () => (
              <TextArea
                name="description"
                label="description"
                value={item.description}
                onChange={onChange}
              />
            ),
          })}
        />
      </WithTabs>

      <FormButton>Submit</FormButton>
    </Form>
  );
}

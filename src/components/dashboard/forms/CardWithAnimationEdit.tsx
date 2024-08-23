import Accordions from "@/components/dashboard/form-controls/Accordion";
import ImageUploadPerview from "@/components/dashboard/form-controls/ImageUploadPerview";
import TextFeild from "@/components/dashboard/form-controls/Input";

import TextArea from "@/components/dashboard/form-controls/TextArea";
import CardWithAnimationProps, {
  CardWithAnimationData,
} from "@/ts/interfaces/CardWithAnimation";
import FormProps from "@/ts/interfaces/FormProps";

import FormButton from "@/components/dashboard/forms/form-button/FormButton";
import Form from "@/components/common/Form";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "./context/FormContext";

interface CardWithAnimationEditI extends CardWithAnimationProps, FormProps {
  id: number;
}
const CardWithAnimationEdit = ({
  id,
  data,
  action,
  errorMessage,
}: CardWithAnimationEditI) => {
  return (
    <FormProvider
      action={action}
      data={data}
      errorMessage={errorMessage}
      id={id}
    >
      <FormElements />
    </FormProvider>
  );
};

export default CardWithAnimationEdit;

interface CardWithAnimationContext extends ContextType {
  state: CardWithAnimationData;
  id: number;
}
const FormElements = () => {
  const { state, handleChange, files, id, action, errorMessage } =
    useFormContext<CardWithAnimationContext>();
  const formData = new FormData();
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  formData.set("data", JSON.stringify({ ...state, id }));
  formData.set("schema", "editCardWithAnimation");
  const modefiedAction = action.bind(null, formData);
  return (
    <Form modifiedAction={modefiedAction}>
      <Accordions
        name="items"
        value={state.items}
        onChange={handleChange}
        getTitle={() => ""}
        childs={(item, onChange) => ({
          img: () => (
            <ImageUploadPerview
              name="img"
              value={item.img}
              onChange={onChange}
            />
          ),
          path: () => (
            <TextFeild
              name="path"
              label="path"
              value={item.path}
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
      <FormButton>Save</FormButton>
    </Form>
  );
};

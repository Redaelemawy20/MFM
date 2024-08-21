import Accordions from "@/components/dashboard/form-controls/Accordion";
import ImageUploadPerview from "@/components/dashboard/form-controls/ImageUploadPerview";
import TextFeild from "@/components/dashboard/form-controls/Input";
import InputI from "@/components/dashboard/form-controls/interfaces/InputI";
import TextAreaI from "@/components/dashboard/form-controls/interfaces/TextAreaI";
import TextArea from "@/components/dashboard/form-controls/TextArea";
import useStateManager from "@/hooks/useStateManager";
import CardWithAnimationProps from "@/ts/interfaces/CardWithAnimation";
import FormProps from "@/ts/interfaces/FormProps";
import ImageUploadPerviewI from "../../dashboard/form-controls/interfaces/ImageUploadPerviewI";
import FormButton from "@/components/dashboard/forms/FormButton";
import Form from "@/components/common/Form";

interface CardWithAnimationEditI extends CardWithAnimationProps, FormProps {
  id: number;
}
const CardWithAnimationEdit = ({
  id,
  data,
  action,
  errorMessage,
}: CardWithAnimationEditI) => {
  const { state, handleChange, files, onUpload, onRemove } =
    useStateManager(data);
  const formData = new FormData();
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  formData.set("data", JSON.stringify({ ...state, id }));
  formData.set("schema", "editCardWithAnimation");
  const modefiedAction = action.bind(null, formData);

  return (
    <Form action={modefiedAction} errorMessage={errorMessage}>
      <Accordions
        name="items"
        value={state.items}
        onChange={handleChange}
        titleProp={"title"}
        childs={() => ({
          img: (props) => (
            <ImageUploadPerview
              {...(props as ImageUploadPerviewI)}
              onUpload={onUpload}
              onRemove={onRemove}
            />
          ),
          path: (props) => <TextFeild {...(props as InputI)} />,
          description: (props) => <TextArea {...(props as TextAreaI)} />,
        })}
      />
      <FormButton>Save</FormButton>
    </Form>
  );
};

export default CardWithAnimationEdit;

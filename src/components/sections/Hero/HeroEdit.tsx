"use client";
import Accordions from "@/components/dashboard/form-controls/Accordion";
import ImageUploadPerview from "@/components/dashboard/form-controls/ImageUploadPerview";
import useStateManager from "@/hooks/useStateManager";
import HeroProps from "@/ts/interfaces/HeroSectionProps";
import ImageUploadPerviewI from "../../../components/dashboard/form-controls/interfaces/ImageUploadPerviewI";
import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "@/components/dashboard/forms/FormButton";
import TextArea from "@/components/dashboard/form-controls/TextArea";
import TextAreaI from "@/components/dashboard/form-controls/interfaces/TextAreaI";
import Form from "@/components/common/Form";

interface HeroEditI extends HeroProps, FormProps {
  id: number;
}
const HeroEdit = ({ id, action, data, errorMessage }: HeroEditI) => {
  const { state, handleChange, onUpload, onRemove, files } =
    useStateManager(data);
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, id }));
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  // formData.set("data", JSON.stringify(state));
  formData.set("schema", "editHero");
  const modifiedAction = action.bind(null, formData);

  return (
    <Form action={modifiedAction} errorMessage={errorMessage}>
      <Accordions
        name="items"
        titleProp={"title"}
        value={state.items}
        onChange={handleChange}
        childs={() => ({
          backgroundImage: (props) => (
            <ImageUploadPerview
              {...(props as ImageUploadPerviewI)}
              onUpload={onUpload}
              onRemove={onRemove}
            />
          ),
          description: (props) => {
            return <TextArea {...(props as TextAreaI)} />;
          },
        })}
      />
      <FormButton>Submit</FormButton>
    </Form>
  );
};

export default HeroEdit;

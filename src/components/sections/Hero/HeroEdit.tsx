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

interface HeroEditI extends HeroProps, FormProps {}
const HeroEdit = ({ action, data, errorMessage }: HeroEditI) => {
  const { state, handleChange, onUpload, onRemove, files } =
    useStateManager(data);
  const formData = new FormData();
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  formData.set("data", JSON.stringify(state));

  const modifiedAction = action.bind(null, formData);
  // console.log(errorMessage);

  return (
    <form action={modifiedAction}>
      <Accordions
        name="items"
        titleProp={"title"}
        value={state.items}
        onChange={handleChange}
        childs={{
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
        }}
      />
      <FormButton>Submit</FormButton>
    </form>
  );
};

export default HeroEdit;

import FormProps from "@/ts/interfaces/FormProps";
import { FeaturesProps } from "./Features";
import useStateManager from "@/hooks/useStateManager";
import ImageUploadPerview from "@/components/dashboard/form-controls/ImageUploadPerview";
import Accordions from "@/components/dashboard/form-controls/Accordion";
import TextArea from "@/components/dashboard/form-controls/TextArea";
import TextAreaI from "@/components/dashboard/form-controls/interfaces/TextAreaI";
import FormButton from "@/components/dashboard/forms/FormButton";
import Form from "@/components/common/Form";
import WithTabs from "@/components/common/withTabs";

interface FeaturesEditI extends FeaturesProps, FormProps {
  id: number;
}
const FeaturesEdit = ({ id, action, data, errorMessage }: FeaturesEditI) => {
  const { state, handleChange, onUpload, onRemove, files } =
    useStateManager(data);
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, id }));
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  formData.set("schema", "editFeatures");

  const modefiedAction = action.bind(null, formData);

  return (
    <Form action={modefiedAction} errorMessage={errorMessage}>
      <WithTabs tabs={["Main image", "Features list"]}>
        <ImageUploadPerview
          name="mainImg"
          onChange={handleChange}
          value={state.mainImg}
          onUpload={onUpload}
          onRemove={onRemove}
        />
        <Accordions
          name="featuresItems"
          value={state.featuresItems}
          onChange={handleChange}
          titleProp="title"
          childs={() => ({
            description: (props) => <TextArea {...(props as TextAreaI)} />,
          })}
        />
      </WithTabs>
      <FormButton>Save</FormButton>
    </Form>
  );
};

export default FeaturesEdit;

import FormProps from "@/ts/interfaces/FormProps";
import { AboutProps } from "./index";
import useStateManager from "@/hooks/useStateManager";
import TextFeild from "@/components/dashboard/form-controls/Input";
import ImageUploadPerview from "@/components/dashboard/form-controls/ImageUploadPerview";
import TextArea from "@/components/dashboard/form-controls/TextArea";
import MultiPointInput from "@/components/dashboard/form-controls/MultiPointInput/MultiPointInput";
import FormButton from "@/components/dashboard/forms/FormButton";
import WithTabs from "@/components/common/withTabs";
import Form from "@/components/common/Form";

interface AboutEditPropsI extends AboutProps, FormProps {
  id: number;
}

const AboutEdit = ({ id, data, action, errorMessage }: AboutEditPropsI) => {
  const { state, handleChange, onUpload, onRemove, files } =
    useStateManager(data);
  const formData = new FormData();
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  formData.set("data", JSON.stringify({ ...state, id }));

  formData.set("schema", "editAbout");
  const modefiedAction = action.bind(null, formData);

  return (
    <Form action={modefiedAction} errorMessage={errorMessage}>
      <WithTabs tabs={["View image", "Titles", "Captions", "List"]}>
        <ImageUploadPerview
          name="viewImg"
          value={state.viewImg}
          onChange={handleChange}
          onUpload={onUpload}
          onRemove={onRemove}
        />
        <>
          <TextFeild
            name="mainTitle"
            value={state.mainTitle}
            onChange={handleChange}
            label="Main title"
          />
          <TextFeild
            name="subTitle"
            value={state.subTitle}
            onChange={handleChange}
            label="Sub title"
          />
        </>
        <>
          <TextArea
            name="caption"
            value={state.caption}
            onChange={handleChange}
            label="Caption"
          />

          <TextFeild
            name="subCaption"
            value={state.subCaption}
            onChange={handleChange}
            label="Sub capiton"
          />
          <TextFeild
            name="endCaption"
            value={state.endCaption}
            onChange={handleChange}
            label="End caption"
          />
        </>
        <MultiPointInput
          label="List"
          name="list"
          value={state.list}
          onChange={handleChange}
        />
      </WithTabs>

      <FormButton>Save</FormButton>
    </Form>
  );
};

export default AboutEdit;

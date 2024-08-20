import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "./FormButton";
import Form from "@/components/common/Form";
import TextFeild from "../form-controls/Input";
import useStateManager from "@/hooks/useStateManager";
import { StaffData } from "@/ts/interfaces/StaffData";
import ImageUploadPerview from "../form-controls/ImageUploadPerview";
import CheckBox from "../form-controls/CheckBox";
interface StaffFormI extends FormProps {
  entity_slug: string;
  staff?: { slug: string; data: StaffData };
}

export default function StaffForm({
  entity_slug,
  action,
  staff,
  errorMessage,
}: StaffFormI) {
  const { state, handleChange, onUpload, onRemove, files } = useStateManager(
    staff ? staff.data : ({} as StaffData)
  );
  const formData = new FormData();
  formData.set(
    "data",
    JSON.stringify({ ...state, entity_slug, slug: staff?.slug })
  );
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  const modefiedAction = action.bind(null, formData);
  return (
    <Form action={modefiedAction} errorMessage={errorMessage}>
      <ImageUploadPerview
        name="avatar"
        onChange={handleChange}
        onUpload={onUpload}
        onRemove={onRemove}
        value={state.avatar}
      />
      <TextFeild
        label="Title ex: dr, prof"
        value={state.title}
        name="title"
        onChange={handleChange}
      />
      <TextFeild
        label="Enter Staff Name"
        value={state.name}
        name="name"
        onChange={handleChange}
      />
      <TextFeild
        label="Current Position"
        value={state.position}
        name="position"
        onChange={handleChange}
      />
      <TextFeild
        label="Degree ex: PHD in Pathology"
        value={state.degree}
        name="degree"
        onChange={handleChange}
      />
      <CheckBox
        label="Check if the member is one of the top leaders"
        name="leadership"
        value={state.leadership}
        onChange={handleChange}
      />
      <FormButton>Save</FormButton>
    </Form>
  );
}

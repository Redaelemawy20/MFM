import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "../form-button/FormButton";
import Form from "@/components/common/Form";
import TextFeild from "../../form-controls/Input";
import { StaffData } from "@/ts/interfaces/StaffData";
import ImageUploadPerview from "../../form-controls/ImageUploadPerview";
import CheckBox from "../../form-controls/CheckBox";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "../context/FormContext";
import LanguageSelect from "../../form-controls/LanguageSelect";
import WithTabs from "@/components/common/withTabs";
import Accordions from "../../form-controls/Accordion";
import { getValueIn } from "@/utils/trans";
import MultiPointInput from "../../form-controls/MultiPointInput/MultiPointInput";
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
  return (
    <FormProvider
      entity_slug={entity_slug}
      action={action}
      data={staff ? staff.data : {}}
      errorMessage={errorMessage}
      staff_slug={staff?.slug}
    >
      <FormElements />
    </FormProvider>
  );
}
interface StaffContext extends ContextType {
  state: StaffData;
  entity_slug: string;
  staff_slug?: string;
}

function FormElements() {
  const {
    state,
    files,
    action,
    handleChange,
    entity_slug,
    staff_slug,
    lang,
    setLang,
  } = useFormContext<StaffContext>();
  const formData = new FormData();
  formData.set(
    "data",
    JSON.stringify({ ...state, entity_slug, slug: staff_slug })
  );
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  const modefiedAction = action.bind(null, formData);
  return (
    <Form modifiedAction={modefiedAction}>
      <LanguageSelect value={lang} onChange={setLang} />
      <WithTabs tabs={["Basic Info", "CV"]}>
        <>
          <ImageUploadPerview
            name="avatar"
            onChange={handleChange}
            value={state.avatar}
          />
          <TextFeild
            label="Title ex: dr, prof"
            value={state.title}
            name="title"
            translatable
          />
          <TextFeild
            label="Enter Staff Name"
            value={state.name}
            name="name"
            translatable
          />
          <TextFeild
            label="Current Position"
            value={state.position}
            name="position"
            translatable
          />
          <TextFeild
            label="Degree ex: PHD in Pathology"
            value={state.degree}
            name="degree"
            translatable
          />
          <CheckBox
            label="Check if the member is one of the top leaders"
            name="leadership"
            value={state.leadership}
            onChange={handleChange}
          />
        </>
        <>
          <Accordions
            name="cv"
            value={state.cv}
            btnText="add cv section"
            getTitle={(item) => getValueIn(item.title, lang)}
            childs={(item, onChange) => ({
              title: () => (
                <TextFeild
                  label="Section title ex: About, Experience"
                  name="title"
                  value={item.title}
                  onChange={onChange}
                  translatable
                />
              ),
              points: () => (
                <MultiPointInput
                  name="points"
                  value={item.points}
                  onChange={onChange}
                  translatable
                />
              ),
            })}
          />
        </>
      </WithTabs>

      <FormButton>Save</FormButton>
    </Form>
  );
}

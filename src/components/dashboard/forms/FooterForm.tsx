"use client";
import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "./FormButton";
import TextFeild from "../form-controls/Input";
import useStateManager from "@/hooks/useStateManager";
import ImageUploadPerview from "../form-controls/ImageUploadPerview";
import Form from "@/components/common/Form";
import { NewsProps } from "@/ts/interfaces/NewsProps";
import WithTabs from "@/components/common/withTabs";
import MultiPointInput from "../form-controls/MultiPointInput/MultiPointInput";
import Accordions from "../form-controls/Accordion";
import ImageUploadPerviewI from "../form-controls/interfaces/ImageUploadPerviewI";
import CheckBox from "../form-controls/CheckBox";
import FooterProps from "@/ts/interfaces/FooterProps";
import TextArea from "../form-controls/TextArea";
import InputI from "../form-controls/interfaces/InputI";

interface FooterEditPropsI extends FooterProps, FormProps {
  entity_slug: string;
}
export default function FooterForm({
  entity_slug,
  action,
  errorMessage,
  data,
}: FooterEditPropsI) {
  const { state, handleChange } = useStateManager(data);
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state }));
  formData.set("entity_slug", entity_slug);
  formData.set("type", "footer");
  const modefiedAction = action.bind(null, formData);

  return (
    <Form action={modefiedAction} errorMessage={errorMessage}>
      <WithTabs tabs={["Basic Ino", "Column 1", "Column 2", "Contact"]}>
        {/* basic info */}
        <>
          <TextFeild
            label="Title"
            name="title"
            value={state.title}
            onChange={handleChange}
          />
          <TextArea
            label="Add Pragraph"
            value={state.paragraph}
            name="paragraph"
            onChange={handleChange}
          />
        </>
        {/* column1 */}
        <>
          <TextFeild
            label="Column1 Title"
            value={state.column1Title}
            name="column1Title"
            onChange={handleChange}
          />
          <Accordions
            name="column1Links"
            value={state.column1Links}
            titleProp={"name"}
            childs={() => ({
              href: (props) => <TextFeild {...(props as InputI)} />,
            })}
            onChange={handleChange}
          />
        </>
        {/* column2 */}
        <>
          <TextFeild
            label="Column2 Title"
            value={state.column2Title}
            name="column2Title"
            onChange={handleChange}
          />
          <Accordions
            name="column2Links"
            value={state.column2Links}
            titleProp={"name"}
            childs={() => ({
              href: (props) => <TextFeild {...(props as InputI)} />,
            })}
            onChange={handleChange}
          />
        </>
        <>
          <TextFeild
            label="Location"
            name="location"
            value={state.location}
            onChange={handleChange}
          />
          <TextFeild
            label="Phone"
            name="phone"
            value={state.phone}
            onChange={handleChange}
          />
          <TextFeild
            label="Email"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </>
      </WithTabs>

      <FormButton>Save</FormButton>
    </Form>
  );
}

"use client";
import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "./form-button/FormButton";
import TextFeild from "../form-controls/Input";
import Form from "@/components/common/Form";
import WithTabs from "@/components/common/withTabs";
import Accordions from "../form-controls/Accordion";
import FooterProps, { FooterData } from "@/ts/interfaces/FooterProps";
import TextArea from "../form-controls/TextArea";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "./context/FormContext";
import { getValueIn } from "@/utils/trans";
import LanguageSelect from "../form-controls/LanguageSelect";

interface FooterEditPropsI extends FooterProps, FormProps {
  entity_slug: string;
}
export default function FooterForm({
  entity_slug,
  action,
  errorMessage,
  data,
}: FooterEditPropsI) {
  return (
    <FormProvider
      entity_slug={entity_slug}
      action={action}
      data={data}
      errorMessage={errorMessage}
    >
      <FormElements />
    </FormProvider>
  );
}
interface FooterContext extends ContextType {
  state: FooterData;
  entity_slug: string;
}
const FormElements = () => {
  const { state, entity_slug, action, lang, setLang } =
    useFormContext<FooterContext>();
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state }));
  formData.set("entity_slug", entity_slug);
  formData.set("type", "footer");
  const modefiedAction = action.bind(null, formData);
  return (
    <Form modifiedAction={modefiedAction}>
      <LanguageSelect value={lang} onChange={setLang} />
      <WithTabs tabs={["Basic Info", "Column 1", "Column 2", "Contact"]}>
        {/* basic info */}
        <>
          <TextFeild
            label="Title"
            name="title"
            value={state.title}
            translatable
          />
          <TextArea
            label="Add Pragraph"
            value={state.paragraph}
            name="paragraph"
            translatable
          />
        </>
        {/* column1 */}
        <>
          <TextFeild
            label="Column1 Title"
            value={state.column1Title}
            name="column1Title"
            translatable
          />
          <Accordions
            name="column1Links"
            value={state.column1Links}
            getTitle={(item) => getValueIn(item.name, lang)}
            childs={(item, onChange) => ({
              name: () => (
                <TextFeild
                  label="link text"
                  name="name"
                  value={item.name}
                  onChange={onChange}
                  translatable
                />
              ),
              href: () => (
                <TextFeild
                  label="link"
                  name="href"
                  value={item.href}
                  onChange={onChange}
                />
              ),
            })}
          />
        </>
        {/* column2 */}
        <>
          <TextFeild
            label="Column2 Title"
            value={state.column2Title}
            name="column2Title"
            translatable
          />
          <Accordions
            name="column2Links"
            value={state.column2Links}
            getTitle={(item) => getValueIn(item.name, lang)}
            childs={(item, onChange) => ({
              name: () => (
                <TextFeild
                  label="link text"
                  name="name"
                  value={item.name}
                  onChange={onChange}
                  translatable
                />
              ),
              href: () => (
                <TextFeild
                  label="link"
                  name="href"
                  value={item.href}
                  onChange={onChange}
                />
              ),
            })}
          />
        </>
        <>
          <TextFeild label="Location" name="location" value={state.location} />
          <TextFeild label="Phone" name="phone" value={state.phone} />
          <TextFeild label="Email" name="email" value={state.email} />
        </>
      </WithTabs>

      <FormButton>Save</FormButton>
    </Form>
  );
};

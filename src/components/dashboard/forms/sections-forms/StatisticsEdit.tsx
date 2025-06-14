"use client";
import FormProps from "@/ts/interfaces/FormProps";
import Accordions from "../../form-controls/Accordion";
import FormButton from "../form-button/FormButton";
import TextFeild from "../../form-controls/Input";
import TextArea from "../../form-controls/TextArea";

import Form from "@/components/common/Form";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "../context/FormContext";
import { StatisticsData, StatisticsProps } from "@/ts/interfaces/Statistics";
import LanguageSelect from "../../form-controls/LanguageSelect";
import { getValueIn } from "@/utils/trans";
import FormPreviewLayout from "@/components/common/FormPreviewLayout";
import DevicesPreview from "@/components/common/DevicesPreview";
import Statistics from "@/sections/Statistics";
import IconSelector from "../../form-controls/IconSelector";
interface StatisticsEditI extends StatisticsProps, FormProps {
  id: number;
}
const StatisticsEdit = ({
  id,
  action,
  data,
  errorMessage,
}: StatisticsEditI) => {
  return (
    <FormProvider
      id={id}
      action={action}
      data={data}
      errorMessage={errorMessage}
    >
      <FormElements />
    </FormProvider>
  );
};

export default StatisticsEdit;
interface StatisticsContext extends ContextType {
  state: StatisticsData;
  id: number;
}
function FormElements() {
  const { state, action, id, setLang, lang } =
    useFormContext<StatisticsContext>();
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, id }));
  formData.set("schema", "editStatistics");

  const modefiedAction = action.bind(null, formData);
  return (
    <FormPreviewLayout>
      <Form modifiedAction={modefiedAction}>
        <LanguageSelect onChange={setLang} value={lang} />
        <TextFeild
          name="title"
          label="section title"
          value={state.title}
          translatable
        />
        <Accordions
          name="items"
          getTitle={(item) => getValueIn(item.subtitle, lang)}
          value={state.items}
          childs={(item, onChange) => ({
            icon: () => (
              <IconSelector name="icon" value={item.icon} onChange={onChange} />
            ),
            subtitle: () => (
              <TextFeild
                name="subtitle"
                label="title"
                value={item.subtitle}
                onChange={onChange}
                translatable
              />
            ),
            num: () => (
              <TextFeild
                name="num"
                label="count"
                value={item.num}
                onChange={onChange}
              />
            ),
            description: () => (
              <TextArea
                name="description"
                label="description"
                value={item.description}
                onChange={onChange}
                translatable
              />
            ),
          })}
        />
        <FormButton>Save</FormButton>
      </Form>
      <DevicesPreview lang={lang}>
        <Statistics data={state} />
      </DevicesPreview>
    </FormPreviewLayout>
  );
}

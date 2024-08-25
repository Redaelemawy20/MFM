import FormProps from "@/ts/interfaces/FormProps";
import Accordions from "../../dashboard/form-controls/Accordion";
import FormButton from "./form-button/FormButton";
import TextFeild from "../../dashboard/form-controls/Input";
import TextArea from "../../dashboard/form-controls/TextArea";

import Form from "@/components/common/Form";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "./context/FormContext";
import { StatisticsData, StatisticsProps } from "@/ts/models/Statistics";
import LanguageSelect from "../form-controls/LanguageSelect";
import { getValueIn } from "@/utils/trans";
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
    <Form modifiedAction={modefiedAction}>
      <LanguageSelect onChange={setLang} value={lang} />
      <Accordions
        name="items"
        getTitle={(item) => getValueIn(item.subtitle, lang)}
        value={state.items}
        childs={(item, onChange) => ({
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
  );
}

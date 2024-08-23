"use client";
import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "./form-button/FormButton";
import TextFeild from "../form-controls/Input";
import useStateManager from "@/hooks/useStateManager";
import ImageUploadPerview from "../form-controls/ImageUploadPerview";
import Form from "@/components/common/Form";
import WithTabs from "@/components/common/withTabs";
import MultiPointInput from "../form-controls/MultiPointInput/MultiPointInput";
import Accordions from "../form-controls/Accordion";
import ImageUploadPerviewI from "../form-controls/interfaces/ImageUploadPerviewI";
import CheckBox from "../form-controls/CheckBox";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "./context/FormContext";
import { NewsItem } from "@/ts/models/NewsProps";

interface NewsFormI extends FormProps {
  data: NewsItem;
  entity_slug: string;
}
export default function NewsForm({
  entity_slug,
  action,
  errorMessage,
  data,
}: NewsFormI) {
  return (
    <FormProvider
      action={action}
      data={data}
      entity_slug={entity_slug}
      errorMessage={errorMessage}
    >
      <FormElements />
    </FormProvider>
  );
}

interface NewsContext extends ContextType {
  state: NewsItem;
  entity_slug: string;
}

function FormElements() {
  const { state, files, entity_slug, action } = useFormContext<NewsContext>();
  const formData = new FormData();
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  formData.set("data", JSON.stringify({ ...state, entity_slug }));

  const modefiedAction = action.bind(null, formData);
  return (
    <Form modifiedAction={modefiedAction}>
      <WithTabs tabs={["News Details", "Gallary"]}>
        <>
          <TextFeild label="Title" value={state.title} name="title" />
          <MultiPointInput
            label="Paragraphs"
            name="content"
            value={state.content}
          />
        </>
        <Accordions
          name="gallary"
          value={state.gallary}
          getTitle={() => ""}
          childs={(item, onChange, i) => {
            return {
              img: () => (
                <>
                  <CheckBox
                    label="Set main image"
                    name="mainImageIdx"
                    value={state.mainImageIdx == i}
                    onChange={() =>
                      onChange({ name: "mainImageIdx", value: i })
                    }
                  />
                  <TextFeild
                    name="imageDescription"
                    label="image description"
                    value={item.imageDescription}
                    onChange={onChange}
                  />
                  <ImageUploadPerview
                    name="img"
                    value={item.img}
                    onChange={onChange}
                  />
                </>
              ),
            };
          }}
        />
      </WithTabs>
      <FormButton>Save</FormButton>
    </Form>
  );
}

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

interface NewsFormI extends FormProps {
  entity_slug: string;
}
export default function NewsForm({
  entity_slug,
  action,
  errorMessage,
}: NewsFormI) {
  const { state, files, handleChange, onUpload, onRemove } =
    useStateManager<NewsProps>({} as NewsProps);
  const formData = new FormData();
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  formData.set("data", JSON.stringify({ ...state, entity_slug }));

  const modefiedAction = action.bind(null, formData);

  return (
    <Form action={modefiedAction} errorMessage={errorMessage}>
      <WithTabs tabs={["News Details", "Gallary"]}>
        <>
          <TextFeild
            label="Title"
            value={state.title}
            name="title"
            onChange={handleChange}
          />
          <MultiPointInput
            label="Paragraphs"
            name="content"
            value={state.content}
            onChange={handleChange}
          />
        </>
        <Accordions
          name="gallary"
          value={state.gallary}
          onChange={handleChange}
          childs={(item, index) => {
            return {
              img: (props) => (
                <>
                  <CheckBox
                    label="Set main image"
                    name="mainImageIdx"
                    value={state.mainImageIdx == index}
                    onChange={() =>
                      handleChange({ name: "mainImageIdx", value: index })
                    }
                  />
                  <ImageUploadPerview
                    {...(props as ImageUploadPerviewI)}
                    onUpload={onUpload}
                    onRemove={onRemove}
                  />
                </>
              ),
            };
          }}
          titleProp="imageDescription"
        />
      </WithTabs>
      <FormButton>Save</FormButton>
    </Form>
  );
}

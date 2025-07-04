"use client";
import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "../form-button/FormButton";
import TextFeild from "../../form-controls/Input";
import ImageUploadPerview from "../../form-controls/ImageUploadPerview";
import Form from "@/components/common/Form";
import WithTabs from "@/components/common/withTabs";
import MultiPointInput from "../../form-controls/MultiPointInput/MultiPointInput";
import Accordions from "../../form-controls/Accordion";
import CheckBox from "../../form-controls/CheckBox";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "../context/FormContext";
import { NewsItem } from "@/ts/interfaces/NewsProps";
import { getValueIn } from "@/utils/trans";
import LanguageSelect from "../../form-controls/LanguageSelect";

interface NewsFormI extends FormProps {
  data?: NewsItem;
  id: number;
}
export default function AddNewsSectionForm({
  action,
  errorMessage,
  data = {} as NewsItem,
}: NewsFormI) {
  return (
    <FormProvider action={action} data={data} errorMessage={errorMessage}>
      <FormElements />
    </FormProvider>
  );
}

interface NewsContext extends ContextType {
  state: NewsItem;
  entity_slug: string;
  slug?: string;
}

function FormElements() {
  const {
    state,
    files,
    entity_slug,
    action,
    lang,
    setLang,
    slug,
    handleChange,
  } = useFormContext<NewsContext>();
  const formData = new FormData();

  const modefiedAction = action.bind(null, formData);
  // const {
  //   data: news,
  //   isLoading,
  //   isError,
  // } = useQuery({
  //   queryFn: () => axios.get(""),
  //   queryKey: ["news"],
  // });
  // const {
  //   data: newsTemplates,
  //   isLoading: loadingTemplates,
  //   isError: loadingTemplatesError,
  // } = useQuery({
  //   queryFn: () => axios.get(""),
  //   queryKey: ["news"],
  // });
  return (
    <>
      <div>
        <h2>Select Showing Templete !</h2>
      </div>
      {/* <Form modifiedAction={modefiedAction}>
      <LanguageSelect value={lang} onChange={setLang} />
      <WithTabs tabs={["News Details", "Gallary"]}>
        <>
          <TextFeild
            label="Title"
            value={state.title}
            name="title"
            translatable
          />
          <MultiPointInput
            label="Paragraphs will apear in news  details"
            name="content"
            value={state.content}
            translatable
          />
        </>
        <Accordions
          name="gallary"
          value={state.gallary}
          getTitle={(item) => getValueIn(item.imageDescription, lang)}
          childs={(item, onChange, i) => {
            return {
              img: () => (
                <>
                  <CheckBox
                    label="Set main image rest of images apear in news details"
                    name="mainImageIdx"
                    value={state.mainImageIdx == i}
                    onChange={() =>
                      handleChange({ name: "mainImageIdx", value: i })
                    }
                  />
                  <TextFeild
                    name="imageDescription"
                    label="image description"
                    value={item.imageDescription}
                    onChange={onChange}
                    translatable
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
    </Form> */}
    </>
  );
}

import FormProps from "@/ts/interfaces/FormProps";
import FormButton from "./form-button/FormButton";
import Form from "@/components/common/Form";
import TextFeild from "../form-controls/Input";
import { StaffData } from "@/ts/interfaces/StaffData";
import ImageUploadPerview from "../form-controls/ImageUploadPerview";
import {
  ContextType,
  FormProvider,
  useFormContext,
} from "./context/FormContext";
import LanguageSelect from "../form-controls/LanguageSelect";
import { Select, SelectItem } from "@nextui-org/react";
import Entity from "@/ts/interfaces/Entity";
import React from "react";

interface UserFormI extends FormProps {
  user?: { entityId?: number; slug: string; data: StaffData };
  entities: Entity[];
}

export default function UserForm({
  entities,
  action,
  user,
  errorMessage,
}: UserFormI) {
  return (
    <FormProvider
      action={action}
      data={user ? { ...user.data, entityId: user.entityId } : {}}
      errorMessage={errorMessage}
      user_slug={user?.slug}
      entities={entities}
    >
      <FormElements />
    </FormProvider>
  );
}
interface UserContext extends ContextType {
  state: StaffData & { entityId: string };
  user_slug?: string;
  entities: Entity[];
}

function FormElements() {
  const {
    state,
    files,
    action,
    handleChange,
    user_slug,
    lang,
    setLang,
    entities,
  } = useFormContext<UserContext>();
  const formData = new FormData();
  formData.set("data", JSON.stringify({ ...state, slug: user_slug }));
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  const modefiedAction = action.bind(null, formData);

  return (
    <Form modifiedAction={modefiedAction}>
      <LanguageSelect value={lang} onChange={setLang} />
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
        <Select
          label="Select user entity"
          className="max-w-xs"
          value={state.entityId}
          name="entityId"
          onChange={(e) => handleChange(e.target)}
        >
          <SelectItem key="none" value="">
            None
          </SelectItem>

          {
            entities.map((e) => (
              <SelectItem key={e.id}>{e.name}</SelectItem>
            )) as any
          }
        </Select>
      </>

      <FormButton>Save</FormButton>
    </Form>
  );
}

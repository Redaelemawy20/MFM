'use client';
import FormProps from '@/ts/interfaces/FormProps';
import FormButton from '../form-button/FormButton';
import TextFeild from '../../form-controls/Input';

import TextArea from '../../form-controls/TextArea';
import ImageUploadPerview from '../../form-controls/ImageUploadPerview';
import Form from '@/components/common/Form';
import {
  ContextType,
  FormProvider,
  useFormContext,
} from '../context/FormContext';
import Entity from '@/ts/interfaces/Entity';
import LanguageSelect from '../../form-controls/LanguageSelect';

interface WebsiteFormI extends FormProps {
  data?: Entity;
  entity_slug?: string;
}
export default function EntityForm({
  data,
  entity_slug,
  action,
  errorMessage,
}: WebsiteFormI) {
  const state = data || {
    name: '',
    description: '',
    logo: { _s: '' },
  };
  return (
    <FormProvider
      data={state}
      entity_slug={entity_slug || ''}
      action={action}
      errorMessage={errorMessage}
    >
      <FormElements />
    </FormProvider>
  );
}

interface EntityContextType extends ContextType {
  state: Entity;
  entity_slug?: string;
}
function FormElements() {
  const { state, files, action, entity_slug, lang, setLang } =
    useFormContext<EntityContextType>();
  const formData = new FormData();
  for (let filename in files) {
    formData.set(filename, files[filename] as File);
  }
  formData.set('data', JSON.stringify({ ...state, entity_slug }));

  const modefiedAction = action?.bind(null, formData);

  return (
    <Form modifiedAction={modefiedAction}>
      <LanguageSelect value={lang} onChange={setLang} />
      <ImageUploadPerview
        value={state.logo}
        name="logo"
        btnText="Upload Logo"
      />
      <TextFeild
        label="Entity Name"
        value={state.name}
        name="name"
        translatable
      />
      <TextFeild
        label="Title that apears at the top"
        value={state.topTitle}
        name="topTitle"
        translatable
      />
      <TextArea
        label="Description - will help in search"
        name="description"
        value={state.description}
        translatable
      />
      <FormButton>Save</FormButton>
    </Form>
  );
}

'use client';
import FormProps from '@/ts/interfaces/FormProps';
import FormButton from '../form-button/FormButton';
import TextFeild from '../../form-controls/Input';
import TextArea from '../../form-controls/TextArea';
import ImageUploadPerview from '../../form-controls/ImageUploadPerview';
import SelectInput from '../../form-controls/Select';
import Form from '@/components/common/Form';
import {
  ContextType,
  FormProvider,
  useFormContext,
} from '../context/FormContext';
import Website from '@/ts/interfaces/Website';
import LanguageSelect from '../../form-controls/LanguageSelect';
import { useTranslations } from 'next-intl';

interface WebsiteFormI extends FormProps {
  data?: Website;
  website_slug?: string;
}

export default function WebsiteForm(props: WebsiteFormI) {
  const state = props.data || {
    name: '',
    description: '',
    logo: { _s: '' },
    topTitle: '',
    status: 'Active',
    type: 'Website',
    category: '',
    url: '',
  };

  return (
    <FormProvider
      data={state}
      {...props}
      entity_slug={props.website_slug || ''}
    >
      <FormElements />
    </FormProvider>
  );
}

interface WebsiteContextType extends ContextType {
  state: Website;
  website_slug?: string;
}

// Define the options for select dropdowns
const statusOptions = [
  { id: 'ACTIVE', name: 'Active' },
  { id: 'INACTIVE', name: 'Inactive' },
];

const typeOptions = [
  { id: 'Website', name: 'Website' },
  { id: 'E-commerce', name: 'E-commerce' },
  { id: 'Blog', name: 'Blog' },
  { id: 'Portfolio', name: 'Portfolio' },
  { id: 'News', name: 'News' },
  { id: 'Travel', name: 'Travel' },
  { id: 'Education', name: 'Education' },
  { id: 'Community', name: 'Community' },
  { id: 'Application', name: 'Application' },
];

function FormElements() {
  const { state, lang, setLang, handleChange } =
    useFormContext<WebsiteContextType>();
  const t = useTranslations('dashboard');
  return (
    <Form>
      <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b">
        {t('websiteInformation')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <div className="mb-6">
            <LanguageSelect value={lang} onChange={setLang} />
          </div>

          <TextFeild
            label={t('websiteName')}
            value={state.name}
            name="name"
            placeholder={t('enterWebsiteName')}
            required
            className="mb-4"
          />

          <div className="grid grid-cols-2 gap-4">
            <SelectInput
              label={t('websiteType')}
              name="type"
              value={state.type}
              options={typeOptions}
              onChange={handleChange}
              valueProp="id"
              optionValue="name"
              placeholder={t('selectType')}
            />

            <SelectInput
              label={t('websiteStatus')}
              name="status"
              value={state.status}
              options={statusOptions}
              onChange={handleChange}
              valueProp="id"
              optionValue="name"
              placeholder={t('selectStatus')}
            />
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center h-64 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 mb-6">
            <ImageUploadPerview
              value={state.logo}
              name="logo"
              fileKey="logoImage"
              btnText={t('uploadLogo')}
            />
          </div>
        </div>
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2 border-b">
        {t('additionalInformation')}
      </h2>
      <TextFeild
        label={t('headerTitle')}
        value={state.topTitle || ''}
        name="topTitle"
        translatable
        placeholder={t('topTitlePlaceholder')}
        className="mb-4"
      />
      <TextArea
        label={t('websiteDescription')}
        name="description"
        value={state.description}
        translatable
        placeholder={t('websiteDescriptionPlaceholder')}
        rows={5}
        className="mb-6"
      />

      <div className="flex justify-end">
        <FormButton className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition">
          {t('saveWebsite')}
        </FormButton>
      </div>
    </Form>
  );
}

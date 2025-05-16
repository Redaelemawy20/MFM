'use client';
import { Radio, RadioGroup } from '@nextui-org/react';
import { Lang } from '../../../ts/common/Translatable';
import { useTranslations } from 'next-intl';

export default function LanguageSelect({
  value = 'en',
  onChange,
}: {
  value: Lang;
  onChange: (lang: Lang) => void;
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange((event.target as HTMLInputElement).value as Lang);
  };
  const t = useTranslations('dashboard');

  return (
    <>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {t('language')}
      </label>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <Radio value="ar">{t('arabic')}</Radio>
        <Radio value="en">{t('english')}</Radio>
      </RadioGroup>
    </>
  );
}

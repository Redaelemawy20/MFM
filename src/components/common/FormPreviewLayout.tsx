import { useTranslations } from 'next-intl';
import React from 'react';

type FormPreviewLayoutProps = {
  children: React.ReactNode[];
};

const FormPreviewLayout: React.FC<FormPreviewLayoutProps> = ({ children }) => {
  const [form, preview] = children;
  const t = useTranslations('builder');
  return (
    <div className="flex flex-col lg:flex-row w-full gap-6 h-full ">
      {/* Form panel - fixed width with scrolling */}
      <div className="lg:w-1/4 w-full flex-shrink-0  border rounded-lg bg-white shadow-sm">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-medium text-gray-800">{t('editForm')}</h3>
        </div>
        <div className="p-4 ">{form}</div>
      </div>

      {/* Preview panel - with overflow handling */}
      <div className="lg:w-3/4 w-full flex-grow overflow-auto max-h-[calc(100vh)] border rounded-lg bg-white shadow-sm">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="font-medium text-gray-800">{t('preview')}</h3>
        </div>
        <div className="p-6 ">{preview}</div>
      </div>
    </div>
  );
};

export default FormPreviewLayout;

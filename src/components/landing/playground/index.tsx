'use client';
import PreviewSelect from '@/components/landing/playground/PreviewSelect';
import { useState } from 'react';
import getComponent from '@/com/getComponent';
import { useTranslations } from 'next-intl';

export default function Playground({
  sections,
}: {
  sections: SectionsToAdd[];
}) {
  const [selectedSection, setSelectedSection] = useState<SectionsToAdd | null>(
    null
  );
  useTranslations('playground');
  const t = useTranslations('Landing');
  const renderPlayGround = () => {
    if (!selectedSection) return null;
    const plaground = getComponent(selectedSection?.componentId);
    if (plaground && plaground.componentEdit)
      return (
        <plaground.componentEdit
          key={selectedSection.id}
          errorMessage=""
          action={() => {}}
          data={plaground.defaultData}
        />
      );
    return null;
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="w-full">
        <PreviewSelect
          sections={sections}
          onSelect={(section) => setSelectedSection(section)}
        />
      </div>

      <div className="w-full mt-4 border rounded-lg bg-white shadow-sm">
        <div className="p-4 border-b bg-gray-50 rounded-t-lg">
          <h3 className="font-medium text-gray-800">
            {selectedSection
              ? `${t('playground.preview')}: ${selectedSection.name}`
              : t('playground.preview')}
          </h3>
        </div>

        <div className="p-6">
          {selectedSection ? (
            renderPlayGround()
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-700 mb-2">
                {t('playground.noSectionSelected')}
              </h4>
              <p className="text-gray-500 max-w-md">
                {t('playground.selectSection')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

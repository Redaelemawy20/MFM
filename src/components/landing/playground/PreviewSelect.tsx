'use client';
import { Section } from '@prisma/client';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
// recive loading prop if so show skeleton for 4 badges sections
export default function PreviewSelect({
  sections,
  onSelect,
  loading,
}: {
  sections: Section[];
  onSelect?: (section: Section) => void;
  loading?: boolean;
}) {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const t = useTranslations('Landing');
  const handleSelectSection = (section: Section) => {
    const newSelectedId = selectedId === section.id ? null : section.id;
    setSelectedId(newSelectedId);
    if (onSelect) {
      onSelect(section);
    }
  };

  return (
    <div className="w-full">
      <div className="h-64 overflow-y-auto p-3 border rounded-md bg-gray-50">
        <h2 className="text-lg font-semibold mb-3">
          {t('playground.availableSections')}
        </h2>

        <p className="text-md text-gray-500 mb-3">
          {sections && sections.length > 0
            ? t('playground.selectSection')
            : t('playground.noSectionSelected')}
        </p>

        {loading ? (
          <div className="flex justify-center flex-wrap gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="inline-flex w-24 h-8 items-center px-3 py-1.5 rounded-full bg-gray-200  animate-pulse"
              ></div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center flex-wrap gap-2">
            {sections.map((section) => (
              <div
                key={section.id}
                className={` inline-flex  h-8 items-center px-3 py-1.5 rounded-full cursor-pointer transition-all ${
                  selectedId === section.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
                onClick={() => handleSelectSection(section)}
              >
                <span className="text-sm font-medium">{section.name}</span>
                {selectedId === section.id && (
                  <span className="ml-2 bg-white bg-opacity-20 w-4 h-4 flex items-center justify-center rounded-full text-xs">
                    ✓
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

'use client';
import { Section } from '@prisma/client';
import { useState } from 'react';

export default function PreviewSelect({
  sections,
  onSelect,
}: {
  sections: Section[];
  onSelect?: (section: Section) => void;
}) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelectSection = (section: Section) => {
    const newSelectedId = selectedId === section.id ? null : section.id;
    setSelectedId(newSelectedId);
    if (onSelect) {
      onSelect(section);
    }
  };

  if (!sections || sections.length === 0) {
    return (
      <div className="p-4 border rounded-md bg-gray-50">
        <p className="text-gray-500 text-center">No sections available</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="h-64 overflow-y-auto p-3 border rounded-md bg-gray-50">
        <h2 className="text-lg font-semibold mb-3">Available Sections</h2>
        <p className="text-md text-gray-500 mb-3">
          Select a section to preview
        </p>
        <div className="flex justify-center flex-wrap gap-2">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`inline-flex items-center px-3 py-1.5 rounded-full cursor-pointer transition-all ${
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
      </div>
    </div>
  );
}

'use client';
import { Section } from '@prisma/client';
import PreviewSelect from '@/components/landing/playground/PreviewSelect';
import { useState } from 'react';

export default function Playground({ sections }: { sections: Section[] }) {
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  return (
    <>
      <PreviewSelect
        sections={sections}
        onSelect={(section) => setSelectedSection(section)}
      />
      <div>
        <h1>{selectedSection?.name}</h1>
        <p>{selectedSection?.type}</p>
      </div>
    </>
  );
}

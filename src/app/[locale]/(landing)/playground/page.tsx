'use client';
/* this is a playground page that allow users to test out website builder components
    the users can select the available components and see how they look like in a real website
    the users edit the components
    the users can preview  the components live as they edit them
*/
import Playground from '@/components/landing/playground';
import PreviewSelect from '@/components/landing/playground/PreviewSelect';
import { useSections } from '@/hooks/queries/useSections';
import { useState } from 'react';

export default function PlaygroundPage() {
  const { data: sections, isLoading, error } = useSections();
  const [selectedSection, setSelectedSection] = useState<SectionsToAdd | null>(
    null
  );
  return (
    <div>
      <PreviewSelect
        sections={sections ?? []}
        loading={isLoading}
        error={error as Error}
        onSelect={setSelectedSection}
      />
      {selectedSection && <Playground selectedSection={selectedSection} />}
    </div>
  );
}

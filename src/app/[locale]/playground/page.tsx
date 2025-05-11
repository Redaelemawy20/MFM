'use client';
/* this is a playground page that allow users to test out website builder components
    the users can select the available components and see how they look like in a real website
    the users edit the components
    the users can preview  the components live as they edit them
*/
import Playground from '@/components/landing/playground';
import PreviewSelect from '@/components/landing/playground/PreviewSelect';
import { useSections } from '@/hooks/queries/useSections';

export default function PlaygroundPage() {
  const { data: sections, isLoading, error } = useSections();
  return (
    <div>
      <PreviewSelect
        sections={sections ?? []}
        loading={isLoading}
        error={error as Error}
      />
      {/* <Playground sections={sections ?? []} /> */}
    </div>
  );
}

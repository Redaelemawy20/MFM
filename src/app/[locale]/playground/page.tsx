/* this is a playground page that allow users to test out website builder components
    the users can select the available components and see how they look like in a real website
    the users edit the components
    the users can preview  the components live as they edit them
*/
import { getSectionsToAdd } from '@/services/fetch/getSectionsToAdd';
import Playground from '@/components/landing/playground';

export default async function PlaygroundPage() {
  const sections = await getSectionsToAdd();
  return (
    <div>
      <Playground sections={sections} />
    </div>
  );
}

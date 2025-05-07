import { Divider } from '@nextui-org/react';
import { EntitySlugParams } from '../../../../../../../ts/common/NextPageParams';
import { notFound } from 'next/navigation';
import CreateStaffModal from '@/components/dashboard/factories/CreateStaffModal';
import StaffTable from '@/components/dashboard/table/StaffTable';
import DisplaySectionModal from '@/components/dashboard/factories/DisplaySectionModal';
import { getSectionsOfType } from '@/services/fetch/getSectionsOfType';
import { getLayoutItemOfEntity } from '@/services/fetch/getLayoutItemOfEntity';
import { getEntityWithStaff } from '@/services/entityServices';
import Main from '@/components/dashboard/structure/Main';
import SubHeader from '@/components/dashboard/structure/SubHeader';

// add account

// accounts
export default async function ({ params }: EntitySlugParams) {
  const { e: entity_slug } = params;
  const entity = await getEntityWithStaff(entity_slug);
  const personSecitons = await getSectionsOfType('persons');
  const personLayout = await getLayoutItemOfEntity(entity_slug, 'persons');
  if (!entity) return notFound();
  const { staff: entityStaff } = entity;
  return (
    <Main>
      <SubHeader>
        <h3 className="text-xl font-semibold">All Staff</h3>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <CreateStaffModal
            entity_slug={entity_slug}
            options={{
              btnText: 'Create New Staff',
            }}
          />
          <DisplaySectionModal
            entity_slug={entity_slug}
            sections={personSecitons}
            selectedIndex={personLayout ? personLayout.sectionId || 1 : 1}
            withorder={{ order: personLayout?.order || 0 }}
            sectionType="persons"
            options={{
              btnText: 'select show template',
            }}
          />
        </div>
      </SubHeader>
      <div className="max-w-[95rem] mx-auto w-full">
        <StaffTable
          entityStaff={entityStaff as any}
          entity_slug={entity.slug}
        />
      </div>
      <Divider />
    </Main>
  );
}

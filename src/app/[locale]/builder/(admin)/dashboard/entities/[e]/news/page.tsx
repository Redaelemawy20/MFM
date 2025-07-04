// add one

import DisplaySectionModal from '@/components/dashboard/factories/DisplaySectionModal';
import { NewsModal } from '@/components/dashboard/factories/EditNewsModal';
import Main from '@/components/dashboard/structure/Main';
import SubHeader from '@/components/dashboard/structure/SubHeader';
import NewsTable from '@/components/dashboard/table/NewsTable';
import { getLayoutItemOfEntity } from '@/services/fetch/getLayoutItemOfEntity';
import { getSectionsOfType } from '@/services/fetch/getSectionsOfType';
import { getNews } from '@/services/newsService';
import { EntitySlugParams } from '@/ts/common/NextPageParams';
import { Divider } from '@nextui-org/react';

// all news
export default async function ({ params }: EntitySlugParams) {
  const { e: slug } = params;
  const newsLayout = await getLayoutItemOfEntity(slug, 'news');
  const newsSections = await getSectionsOfType('news');
  const news = await getNews(slug);

  return (
    <Main>
      <SubHeader>
        <h1 className="text-2xl font-extrabold">All News</h1>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <NewsModal
            entity_slug={params.e}
            options={{
              btnText: 'Add News',
            }}
          />
          <DisplaySectionModal
            entity_slug={slug}
            sections={newsSections}
            selectedIndex={newsLayout?.sectionId || 1}
            withorder={{ order: newsLayout?.order || 0 }}
            sectionType="news"
            options={{
              btnText: 'Display Template',
            }}
          />
        </div>
      </SubHeader>

      <Divider />
      <div className="flex flex-col gap-2">
        <NewsTable news={news as any} entity_slug={slug} />
      </div>
    </Main>
  );
}

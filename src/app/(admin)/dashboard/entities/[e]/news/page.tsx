// add one

import EditNewsModal from "@/components/dashboard/factories/EditNewsModal";
import { EntitySlugParams } from "@/ts/common/NextPageParams";

// all news
export default function ({ params }: EntitySlugParams) {
  return (
    <div className="flex justify-between flex-wrap gap-4 items-center">
      <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
        <h1 className="text-2xl font-extrabold">All News</h1>
      </div>
      <div className="flex flex-row gap-3.5 flex-wrap">
        <EditNewsModal entity_slug={params.e} />
      </div>
    </div>
  );
}

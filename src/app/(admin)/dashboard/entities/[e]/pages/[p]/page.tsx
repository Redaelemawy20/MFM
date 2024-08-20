// a generated page under the entity like department or unit

import SectionEditCard from "@/components/dashboard/cards/section-edit-card";
import AddSectionModal from "@/components/dashboard/factories/AddSectionModal";

import SortSectionModal from "@/components/dashboard/factories/SortSectionsModal";
import { getPageSections } from "@/services/fetch/getPageSections";
import { getSectionsToAdd } from "@/services/fetch/getSectionsToAdd";
import { notFound } from "next/navigation";

// add section

// sort sections

// all sections along with edit remove
interface PageProps {
  params: {
    p: string;
  };
}
export default async ({ params }: PageProps) => {
  const pageSections = await getPageSections(params.p);
  if (!pageSections) return notFound();
  const sections = await getSectionsToAdd();

  return (
    <>
      <h3 className="text-xl font-semibold">Page 1 </h3>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap font-semibold">
          All Sections
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <AddSectionModal sections={sections} page={params.p} />
          <SortSectionModal sections={pageSections} />
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 2xl:grid-cols-3 gap-3  justify-center w-full">
        {pageSections.map((section) => (
          <SectionEditCard
            key={section.id}
            id={section.id}
            section={section.section}
            data={section.data}
          />
        ))}
      </div>
    </>
  );
};

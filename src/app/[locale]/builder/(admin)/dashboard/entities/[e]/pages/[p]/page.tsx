// a generated page under the entity like department or unit

import SectionsControls from "@/components/dashboard/builder/header/SectionsControls";
import SectionEditCard from "@/components/dashboard/cards/section-edit-card";
import DisplaySectionModal from "@/components/dashboard/factories/DisplaySectionModal";
import EditFooterModal from "@/components/dashboard/factories/EditFooterModal";
import EditLinksModal from "@/components/dashboard/factories/EditLinksModal";

import Main from "@/components/dashboard/structure/Main";
import NavWrapper from "@/components/dashboard/structure/NavWrapper";
import { getLayoutItemOfEntity } from "@/services/fetch/getLayoutItemOfEntity";
import { getSectionsOfType } from "@/services/fetch/getSectionsOfType";

import { getSectionsToAdd } from "@/services/fetch/getSectionsToAdd";
import { getPageSections } from "@/services/pageServices";
import { notFound } from "next/navigation";
import { sortSectionsWithOrder } from "../../../../../../../../utils/sort-sections-w-order";

// add section

// sort sections

// all sections along with edit remove
interface PageProps {
  params: {
    p: string;
    e: string;
  };
}
export default async ({ params }: PageProps) => {
  const nav = (await getLayoutItemOfEntity(params.e, "nav")) as any;
  const footer = (await getLayoutItemOfEntity(params.e, "footer")) as any;
  const navData = nav ? JSON.parse(nav.data) : {};
  const footerData = footer ? JSON.parse(footer.data) : {};

  const pageSections = await getPageSections(params.e, params.p);
  if (!pageSections) return notFound();
  const sortedSections = sortSectionsWithOrder(pageSections);
  const sections = await getSectionsToAdd();

  const navSections = await getSectionsOfType("nav");
  const footerSections = await getSectionsOfType("footer");
  return (
    <Main>
      <div className="flex flex-col justify-center items-center">
        <NavWrapper>
          <div className="flex flex-row gap-2">
            <EditLinksModal
              entity_slug={params.e}
              data={navData as any}
              options={{
                btnText: "Edit NavBar",
                width: "w-[500px]",
              }}
            />
            <DisplaySectionModal
              entity_slug={params.e}
              sections={navSections}
              selectedIndex={nav ? nav.sectionId || 1 : 1}
              sectionType="nav"
              options={{
                btnText: "change display template",
                color: "default",
              }}
            />
          </div>
        </NavWrapper>
        {sortedSections.map((section) => (
          <SectionEditCard
            key={section.id}
            id={section.id}
            section={section.section}
            data={section.data}
          />
        ))}
        <NavWrapper>
          <div className="flex flex-row gap-2">
            <EditFooterModal
              entity_slug={params.e}
              data={footerData as any}
              options={{
                btnText: "Edit footer",
                width: "w-[500px]",
              }}
            />
            <DisplaySectionModal
              entity_slug={params.e}
              sections={footerSections}
              selectedIndex={footer ? footer.sectionId || 1 : 1}
              sectionType="footer"
              options={{
                btnText: "change display template",
                color: "default",
              }}
            />
          </div>
        </NavWrapper>
      </div>
      <div className="fixed bottom-8 right-4  hover:bg-indigo-700 text-white rounded-full  shadow-lg flex items-center justify-center">
        <SectionsControls
          pageSections={sortedSections}
          sectionsToAdd={sections}
        />
      </div>
    </Main>
  );
};

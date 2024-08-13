// select template will show

import DisplaySectionModal from "@/components/dashboard/factories/DisplaySectionModal";
import EditFooterModal from "@/components/dashboard/factories/EditFooterModal";
import EditLinksModal from "@/components/dashboard/factories/EditLinksModal";
import db from "@/db";
import { getLayoutItemOfEntity } from "@/services/getLayoutItemOfEntity";
import { getSectionsOfType } from "@/services/getSectionsOfType";
import { EntitySlugParams } from "@/ts/common/NextPageParams";
import { Divider } from "@nextui-org/react";

export default async function EntityLists({ params }: EntitySlugParams) {
  const { e: slug } = params;
  const navLayout = await getLayoutItemOfEntity(slug, "nav");
  const footerLayout = await getLayoutItemOfEntity(slug, "footer");
  const navSections = await getSectionsOfType("nav");
  const footerSections = await getSectionsOfType("footer");

  const renderLinks = (links: Link[], level = 0) => {
    return (
      <ul className={`ps-${level * 2} border-l  border-gray-300`}>
        {links.map((link, i) => {
          return (
            <li key={link.name + i} className="p-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {link.name}
              </h2>
              {link.hasDropDown && renderLinks(link.menu, level + 1)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <h1 className="text-2xl font-extrabold">All links</h1>
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <EditLinksModal
            entity_slug={slug}
            data={(navLayout ? navLayout.data : {}) as any}
          />
          <DisplaySectionModal
            entity_slug={slug}
            sections={navSections}
            selectedIndex={navLayout ? navLayout.sectionId : 1}
          />
        </div>
      </div>
      <div className="p-4 border-2">{renderLinks(links)}</div>
      <Divider />
      <div className="flex justify-between flex-wrap gap-4 items-center">
        <div className="flex items-center gap-3 flex-wrap md:flex-nowrap">
          <h1 className="text-2xl font-extrabold">Footer</h1>
        </div>
        <div className="flex flex-row gap-3.5 flex-wrap">
          <EditFooterModal
            entity_slug={slug}
            data={(footerLayout ? footerLayout.data : {}) as any}
          />
          <DisplaySectionModal
            entity_slug={slug}
            sections={footerSections}
            selectedIndex={footerLayout ? footerLayout.sectionId : 1}
          />
        </div>
      </div>
    </>
  );
}

/**Header Links**/
const links: Link[] = [
  {
    name: "Home",
    href: "/",
    hasDropDown: true,
    menu: [],
  },
  {
    name: "About",
    href: "/faculites",
    menu: [
      {
        name: "faculty of sceince ",
        href: "/faculty-of-arts",
      },
    ],
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Departments",
    href: "/departments",
  },
  {
    name: "Doctors",
    href: "/doctors",
    menu: [
      {
        name: "unit 1",
        href: "/unit-1",
      },
      {
        name: "second page",
        href: "/unit-2",
      },
    ],
  },
  {
    name: "Drop down",

    href: "#",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

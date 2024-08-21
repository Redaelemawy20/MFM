import { footerGallary, navGallary } from "@/com/gallary";
import db from "@/db";
import { fileSrc } from "@/utils/file-src";
import { extractImgSrc } from "@/utils/get-img";

export async function getLayoutElements(entity_slug: string) {
  const entity = await db.entity.findFirst({
    where: { slug: entity_slug },
    include: {
      layoutItem: {
        include: {
          section: true,
        },
      },
    },
  });
  if (!entity) return null;
  let layout = {} as LayoutI;
  const layoutItems = entity.layoutItem;
  if (!layoutItems) return layout;
  const navItem = layoutItems.find((item) => item.type === "nav");
  const footerItem = layoutItems.find((item) => item.type === "footer");
  if (navItem && navItem.section) {
    const navItemObj = getNavComponent(navItem.section.componentId);
    const logo = extractImgSrc(entity.meta, "logo");
    if (navItemObj) {
      layout.nav = () => (
        <navItemObj.component
          data={JSON.parse(navItem.data as string) as any}
          logo={fileSrc(logo)}
        />
      );
    }
  }
  if (footerItem && footerItem.section) {
    const footerItemObj = getFooterComponent(footerItem.section.componentId);
    if (footerItemObj) {
      layout.footer = () => (
        <footerItemObj.component
          data={JSON.parse(footerItem.data as string) as any}
        />
      );
    }
  }
  return layout;
}
function getNavComponent(id: string) {
  return navGallary.find((item) => item.componentId === id);
}
function getFooterComponent(id: string) {
  return footerGallary.find((item) => item.componentId === id);
}

interface LayoutI {
  nav?: () => React.ReactNode;
  footer?: () => React.ReactNode;
}

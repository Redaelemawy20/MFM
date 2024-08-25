import { getEntityWithLayout } from "@/services/models/entity";
import { getLayoutElements } from "@/services/ui/get-layout-elements";
import Entity from "@/ts/models/Entity";
import { extractImgSrc } from "@/utils/get-img";
import { getValueIn } from "@/utils/trans";
import { Metadata } from "next";
import { notFound } from "next/navigation";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: "ar" | "en" };
}): Promise<Metadata> {
  // read route params

  let title;
  let description;
  let logo = "";
  // fetch data
  const entity = await getEntityWithLayout("menofia-university");
  if (entity && entity.meta) {
    let meta = JSON.parse(entity.meta as any) as Entity;
    title = getValueIn(meta.topTitle, locale);
    description = getValueIn(meta.description, locale);
    logo = extractImgSrc(meta, "logo");
  }
  // optionally access and extend (rather than replace) parent metadata
  // const parentMetData = (await parent)

  return {
    title,
    description,
    icons: [logo],
  };
}
const UniLayout = async ({ children }: { children: React.ReactNode }) => {
  const layout = await getLayoutElements("menofia-university");
  if (!layout) {
    return notFound();
  }
  return (
    <>
      {layout.nav ? layout.nav() : <header>no nav</header>}
      <main>{children}</main>

      {layout.footer ? layout.footer() : <div>no footer</div>}
      {/* <div className="fixed left-0 bottom-0 w-full">
      </div> */}
    </>
  );
};

export default UniLayout;

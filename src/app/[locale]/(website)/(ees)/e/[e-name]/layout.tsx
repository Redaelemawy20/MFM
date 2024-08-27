// the layout of the entity

import { getEntityWithLayout } from "@/services/models/entity";
import { getLayoutElements } from "@/services/ui/get-layout-elements";
import Entity from "@/ts/interfaces/Entity";
import { extractImgSrc } from "@/utils/get-img";
import { getValueIn } from "@/utils/trans";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { locale: "ar" | "en"; "e-name": string };
}): Promise<Metadata> {
  // read route params
  const { "e-name": entity_name, locale } = params;
  let title;
  let description;
  let logo = "";
  // fetch data
  const entity = await getEntityWithLayout(entity_name);
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
// fetch it's navbar and news footer
interface EntiyPageLayoutProps {
  children: React.ReactNode;
  params: { "e-name": string };
}
export default async ({ children, params }: EntiyPageLayoutProps) => {
  const { "e-name": entity_name } = params;
  const layout = await getLayoutElements(entity_name);

  if (!layout) {
    return notFound();
  }
  return (
    <>
      {layout.nav ? layout.nav() : <header>no nav</header>}
      <main>{children}</main>
      <div className="fixed left-0 bottom-0 w-full">
        {layout.footer ? layout.footer() : <div>no footer</div>}
        {/* footer */}
      </div>
    </>
  );
};

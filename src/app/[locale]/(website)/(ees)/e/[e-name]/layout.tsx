// the layout of the entity

import { getLayoutElements } from "@/services/ui/get-layout-elements";
import { notFound } from "next/navigation";

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
      {/* {layout.nav && layout.nav()} */}
      <main>{children}</main>
      <div className="fixed left-0 bottom-0 w-full">
        {/* {layout.footer ? layout.footer() : <div>no footer</div>} */}
        {/* footer */}
      </div>
    </>
  );
};

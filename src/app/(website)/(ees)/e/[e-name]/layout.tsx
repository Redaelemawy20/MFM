// the layout of the entity

import { getLayout } from "@/services/getLayout";
import { notFound } from "next/navigation";

// fetch it's navbar and news footer
interface EntiyPageLayoutProps {
  children: React.ReactNode;
  params: { "e-name": string };
}
export default async ({ children, params }: EntiyPageLayoutProps) => {
  const { "e-name": entity_name } = params;
  const layout = await getLayout(entity_name);
  if (!layout) {
    return notFound();
  }
  return (
    <>
      {layout.nav && layout.nav()}
      <main>{children}</main>
      {layout.footer && layout.footer()}
    </>
  );
};

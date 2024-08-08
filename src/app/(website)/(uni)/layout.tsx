import { getLayout } from "@/services/getLayout";
import { notFound } from "next/navigation";

const UniLayout = async ({ children }: { children: React.ReactNode }) => {
  const layout = await getLayout("menofia-university");
  if (!layout) {
    return notFound();
  }
  return (
    <>
      {layout.nav()}
      <div>{children}</div>
      {layout.footer()}
    </>
  );
};

export default UniLayout;

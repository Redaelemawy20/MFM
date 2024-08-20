import { getLayout } from "@/services/getLayout";
import { notFound } from "next/navigation";

const UniLayout = async ({ children }: { children: React.ReactNode }) => {
  const layout = await getLayout("menofia-university");
  if (!layout) {
    return notFound();
  }
  return (
    <>
      {layout.nav ? layout.nav() : <header>no nav</header>}
      <div>{children}</div>

      <div className="fixed left-0 bottom-0 w-full">
        {layout.footer ? layout.footer() : <div>no footer</div>}
      </div>
    </>
  );
};

export default UniLayout;

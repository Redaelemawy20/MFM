import db from "@/db";

interface PageEdit {
  params: {
    slug: string;
  };
}
const PageEdit = async ({ params }: PageEdit) => {
  await db.page.findMany({
    where: {
      name: params.slug,
    },
    select: {
      sections: true,
      _count: true,
    },
  });
  return <></>;
};

export default PageEdit;

import db from "@/db";
import { revalidatePath } from "next/cache";

export async function createPage(data: any) {
  await db.page.create({ data: { name: data.name } });
}

export async function addSections(data: any) {
  const { pagename, sections } = data;
  await db.page.update({
    where: {
      name: String(pagename),
    },
    data: {
      sections: {
        createMany: {
          data: Array.isArray(sections)
            ? sections.map((sectionId: string) => ({
                sectionId: parseInt(sectionId),
              }))
            : [{ sectionId: parseInt(sections) }],
        },
      },
    },
  });
}

export async function sortSections(data: any) {
  const { pagename, sections } = data;
  console.log(sections);

  for (let section of sections) {
    await db.pageSections.update({
      where: {
        id: parseInt(section.id),
      },
      data: {
        order: parseInt(section.order),
      },
    });
  }
  // await db.page.update({
  //   where: {
  //     name: pagename,
  //   },
  //   data: {
  //     sections: {
  //       updateMany: {
  //         where: { id: sections.map((s: any) => s.id) },
  //         data: sections.map((section: any) => {
  //           return { order: section.order };
  //         }),
  //       },
  //     },
  //   },
  // });
}
export async function editSections(data: any) {
  const id = parseInt(data.id);
  delete data.id;
  await db.pageSections.update({
    where: {
      id,
    },
    data: {
      data: data,
    },
  });
}

export const onPageCreated = () => {
  revalidatePath("/dashboard/content");
};
export const onSectionAdded = (data: any) => {
  revalidatePath(`/dashboard/content/${data.pagename}`);
};

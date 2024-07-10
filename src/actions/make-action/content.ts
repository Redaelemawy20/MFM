import db from "@/db";
import { revalidatePath } from "next/cache";

export async function createPageAction(data: any) {
  await db.page.create({ data: { name: data.name } });
}

export async function addSectionsAction(data: any) {
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

export const onPageCreated = () => {
  revalidatePath("/dashboard/content");
};
export const onSectionAdded = (data: any) => {
  revalidatePath(`/dashboard/content/${data.pagename}`);
};

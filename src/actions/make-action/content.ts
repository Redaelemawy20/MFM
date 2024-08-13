import db from "@/db";
import convertToSlug from "@/utils/convet-to-slug";
import { revalidatePath } from "next/cache";
// import { setEntityLinks } from '../content';

export async function createPage(data: any) {
  await db.page.create({
    data: {
      name: data.name,
      slug: convertToSlug(data.name),
      entity: {
        connect: {
          slug: data.entity_slug,
        },
      },
    },
  });
}
export async function createEntityAction(data: any) {
  const name = data.name as string;
  const slug = convertToSlug(name);
  const description = data.description;
  const meta = JSON.stringify({
    description,
    logo: data.logo,
  });
  await db.entity.create({
    data: {
      name,
      slug,
      meta,
    },
  });
}
export async function setEntityLinksAction(data: any) {
  console.log(data);
  const layoutItem = await db.layout.findFirst({
    where: {
      type: data.type,
      AND: {
        entity: {
          slug: data.entity_slug,
        },
      },
    },
  });
  if (layoutItem) {
    await db.layout.update({
      where: {
        id: layoutItem.id,
      },
      data: {
        data: data.data,
      },
    });
  } else {
    await db.layout.create({
      data: {
        data: data.data,
        type: data.type,
        entity: {
          connect: {
            slug: data.entity_slug,
          },
        },
      },
    });
  }
}

export async function editNewsAction(data: any) {
  const { entity_slug } = data;
  delete data.entity_slug;
  await db.news.create({
    data: {
      slug: convertToSlug(data.title.slice(0, 50)),
      title: data.title,
      details: data,
      entity: {
        connect: {
          slug: entity_slug,
        },
      },
    },
  });
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
export async function setDiplaySectionAction(data: any) {
  const foundLayout = await db.layout.findFirst({
    where: {
      sectionId: data.sectionId,
      AND: {
        entity: {
          slug: data.entity_slug,
        },
      },
    },
  });
  if (foundLayout) {
    await db.layout.update({
      where: {
        id: foundLayout.id,
      },
      data: {
        sectionId: data.sectionId,
      },
    });
  } else {
    await db.layout.create({
      data: {
        data: "{}",
        type: data.sectionType,
        sectionId: data.sectionId,
        entity: {
          connect: {
            slug: data.entity_slug,
          },
        },
      },
    });
  }
}
export const onPageCreated = () => {
  revalidatePath("/dashboard/content");
};
export const onSectionAdded = (data: any) => {
  revalidatePath(`/dashboard/content/${data.pagename}`);
};

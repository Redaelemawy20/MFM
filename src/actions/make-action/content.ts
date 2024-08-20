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
      slug: String(pagename),
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
  const { sections } = data;

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
  console.log(data);

  const foundLayout = await db.layout.findFirst({
    where: {
      type: data.sectionType,

      AND: {
        entity: {
          slug: data.entity_slug,
        },
      },
    },
  });
  if (foundLayout) {
    console.log(foundLayout);

    await db.layout.update({
      where: {
        id: foundLayout.id,
      },
      data: {
        sectionId: parseInt(data.sectionId),
      },
    });
  } else {
    await db.layout.create({
      data: {
        data: "{}",
        type: data.sectionType,
        // sectionId: parseInt(data.sectionId),
        section: {
          connect: {
            id: parseInt(data.sectionId),
          },
        },
        entity: {
          connect: {
            slug: data.entity_slug,
          },
        },
      },
    });
  }
}
export async function deleteSectionAction(data: any) {
  const id = data.id;
  await db.pageSections.delete({ where: { id: parseInt(id) } });
}
export async function deletePageAction(data: any) {
  const id = data.id;
  await db.page.delete({ where: { id: parseInt(id) } });
}

export async function createStaffAction(data: any) {
  const leader = Boolean(data.leadership);
  delete data.leader;
  if (data.slug) {
    const slug = data.slug;
    delete data.slug;
    await db.user.update({
      where: {
        slug: slug,
      },
      data: {
        name: data.name,
        slug: convertToSlug(data.name),
        leadership: leader,
        data: data,
      },
    });
  } else
    await db.user.create({
      data: {
        name: data.name,
        slug: convertToSlug(data.name),
        data,
        leadership: leader,
        entity: {
          connect: {
            slug: data.entity_slug,
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

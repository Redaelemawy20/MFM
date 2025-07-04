import db from "@/db";
import convertToSlug from "@/utils/convet-to-slug";
import { getValueIn } from "@/utils/trans";
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
export async function editEntityAction(data: any) {
  const name = data.name.en;
  const slug = convertToSlug(name);
  const meta = JSON.stringify({
    topTitle: data.topTitle,
    description: data.description,
    name: data.name,
    logo: data.logo,
  });
  await db.entity.upsert({
    where: {
      slug: data.entity_slug,
    },
    create: {
      name,
      slug,
      meta,
      pages: {
        create: {
          name: "_home",
          slug: "_home",
        },
      },
    },
    update: {
      meta,
    },
  });
}
export async function editNewsAction(data: any) {
  const { entity_slug, slug } = data;
  const enTitle = getValueIn(data.title, "en");
  delete data.entity_slug;
  delete data.slug;
  let newSlug = convertToSlug(enTitle.slice(0, 50));
  await db.news.upsert({
    where: { slug },
    create: {
      slug: newSlug,
      title: enTitle,
      details: data,
      entity: {
        connect: {
          slug: entity_slug,
        },
      },
    },
    update: {
      slug: newSlug,
      details: data,
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

export async function addSections(data: any) {
  const { pagename, sections, entity_slug } = data;
  const entity = await db.entity.findUnique({
    where: {
      slug: entity_slug,
    },
  });
  if (!entity) throw new Error("entity not found");
  else
    await db.page.update({
      where: {
        entityId_slug: {
          entityId: entity.id,
          slug: pagename,
        },
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
    await db.layout.update({
      where: {
        id: foundLayout.id,
      },
      data: {
        sectionId: parseInt(data.sectionId),
        order: parseInt(data.order),
      },
    });
  } else {
    await db.layout.create({
      data: {
        data: "{}",
        type: data.sectionType,
        order: parseInt(data.order),
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
  let nameEn = getValueIn(data.name, "en");
  const newSlug = convertToSlug(nameEn);
  if (data.slug) {
    const slug = data.slug;
    delete data.slug;
    await db.user.update({
      where: {
        slug: slug,
      },
      data: {
        name: nameEn,
        slug: newSlug,
        leadership: leader,
        data,
      },
    });
  } else
    await db.user.create({
      data: {
        name: nameEn,
        slug: newSlug,
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

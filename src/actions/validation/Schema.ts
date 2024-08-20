import { z } from "zod";

const linkValidator = z
  .string()
  .min(3, { message: "min length is 3 letters" })
  .regex(/^[a-z-]+$/, {
    message: "must be lowercase letters or dashes without speces",
  });
export const createEntitySchema = z.object({
  name: z.string().min(3),
  description: z.string().min(50),
});
export const createPageSchema = z.object({
  name: z.string().min(3),
  entity_slug: linkValidator,
});

export const addSectionsShecma = z.object({
  sections: z.array(z.coerce.number()).min(1).or(z.coerce.number()),
});
export const sortSectionsSchema = z.object({
  sections: z.array(
    z.object({
      id: z.coerce.number(),
      order: z.coerce.number(),
    })
  ),
  // pagename: z.string(),
});

// Define the schema with a recursive reference using z.lazy
const baseLinkSchema = z.object({
  name: z.string(),
  href: z.string(),
});

type Link = z.infer<typeof baseLinkSchema> & {
  menu?: Link[];
};
const linkSchema: z.ZodType<Link> = baseLinkSchema.extend({
  menu: z.optional(z.lazy(() => linkSchema.array())),
});

export const EditNavSchema = z.object({
  items: z.array(linkSchema),
  start: z.string().min(3),
  end: z.string().min(3),
});
export const EditFooterSchema = z.object({
  title: z.string().min(3),
  paragraph: z.string().min(3),
  column1Title: z.string().min(3),
  column2Title: z.string().min(3),
  location: z.string().min(3),
  phone: z.string().min(3),
  email: z.string().min(3).email(),
  column1Links: z.array(
    z.object({ name: z.string().min(3), href: z.string().min(3) })
  ),
  column2Links: z.array(
    z.object({ name: z.string().min(3), href: z.string().min(3) })
  ),
});
export const NewsSchema = z.object({
  title: z.string(),
  content: z.array(z.string()),
  mainImageIdx: z.number(),
});

export const CreateStaffSchema = z.object({
  title: z.string(),
  name: z.string(),
  position: z.string(),
  degree: z.optional(z.string()),
});
export const schemas = {
  editHero: z.object({
    items: z
      .array(
        z.object({
          title: z.string().min(3),
          description: z.string().min(10),
          backgroundImage: z.object({
            preview: z
              .string({
                message:
                  "Ensure that the background images is set to all items",
              })
              .max(50),
          }),
        })
      )
      .max(4),
  }),
  editAbout: z.object({
    mainTitle: z.string().min(3),
    caption: z.string().min(3),
    subTitle: z.string().min(3),
    subCaption: z.string().min(3),
    endCaption: z.string().min(3),
    list: z.array(z.string().min(3)),
  }),
  editCardWithAnimation: z.object({
    items: z.array(
      z.object({
        title: z.string().min(3),
        path: linkValidator,
        description: z.string().min(3),
      })
    ),
  }),
  editFeatures: z.object({
    featuresItems: z.array(
      z.object({
        title: z.string().min(3),
        description: z.string().min(3),
      })
    ),
  }),
  editHighlightedSection: z.object({
    title: z.string().min(3),
    description: z.string().min(3),
    btnText: z.string().min(3),
    path: linkValidator,
  }),
  editMainTitle: z.object({
    mainTitle: z.string().min(3),
    caption: z.string().min(3),
  }),
  editServices: z.object({
    title: z.string().min(3),
    caption: z.string().min(3),
    cardsData: z.array(
      z.object({
        title: z.string().min(3),
        description: z.string().min(3),
      })
    ),
  }),
  editStatistics: z.object({
    items: z.array(
      z.object({
        num: z.coerce.number(),
        subtitle: z.string().min(3),
        description: z.string().min(3),
      })
    ),
  }),
};

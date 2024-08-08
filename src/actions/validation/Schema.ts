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
  name: linkValidator,
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
export const schemas = {
  editNav: z.object({
    items: z.array(z.object({ name: z.string().min(3), href: linkValidator })),
    start: z.string().min(3),
    end: z.string().min(3),
  }),
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
    capiton: z.string().min(3),
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

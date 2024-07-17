import { z } from "zod";

const linkValidator = z
  .string()
  .min(3, { message: "min length is 3 letters" })
  .regex(/^[a-z-]+$/, {
    message: "must be lowercase letters or dashes without speces",
  });
export const createPageSchema = z.object({
  name: linkValidator,
});

export const addSectionsShecma = z.object({
  sections: z.array(z.coerce.number()).min(1).or(z.coerce.number()),
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
};

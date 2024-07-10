import { z } from "zod";

export const createPageSchema = z.object({
  name: z
    .string()
    .min(3, { message: "min length is 3 letters" })
    .regex(/^[a-z-]+$/, {
      message: "must be lowercase letters or dashes without speces",
    }),
});

export const addSectionsShecma = z.object({
  sections: z.array(z.coerce.number()).min(1).or(z.coerce.number()),
});

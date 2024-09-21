import { z } from "zod";

const setDtoSchema = z.object({
  collectibleCount: z.number(),
  collectibleRevealedCount: z.number(),
  hyped: z.boolean(),
  id: z.number(),
  name: z.string(),
  nonCollectibleCount: z.number(),
  nonCollectibleRevealedCount: z.number(),
  slug: z.string(),
  type: z.enum(["expansion", "adventure", ""]),
})

export const metadataDtoSchema = z.object({
  sets: z.array(setDtoSchema),
})

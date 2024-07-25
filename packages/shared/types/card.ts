
import { z } from 'zod';

export const CardDtoSchema = z.object({
  attack: z.number().optional(),
  cardSetId: z.number(),
  cardTypeId: z.number(),
  childIds: z.array(z.number()).optional(),
  classId: z.number(),
  health: z.number().optional(),
  image: z.string(),
  keywordIds: z.array(z.number()),
  manaCost: z.number(),
  multiClassIds: z.array(z.number()),
  name: z.string(),
  rarityId: z.number(),
  spellSchoolId: z.number().optional(),
  text: z.string(),
  wild: z.boolean(),
})

export type CardDto = z.infer<typeof CardDtoSchema>;

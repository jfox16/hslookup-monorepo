
export interface Card {
  attack?: number;
  bannedFromSideboard?: number;
  cardSetId: number;
  cardTypeId: number;
  classId: number;
  health?: number;
  id: number;
  image: string;
  keywordIds?: number[];
  manaCost: number;
  minionTypeId?: number;
  multiClassIds?: number[];
  multiTypeIds?: number[];
  name: string;
  rarityId: number;
  slug: string;
  spellSchoolId?: number;
  text: string;
}

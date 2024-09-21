
export interface LookupFilter {
  // Numeric Filters
  attack?: number;
  health?: number;
  manaCost?: number;

  cardSetId?: 'wild'|'standard'|number;
  cardTypeId?: number;
  classIds: Set<number>;
  keywordId?: number;
  minionTypeId?: number;
  rarityId?: number;
  spellSchoolId?: number;
}


export interface CardSet {
  id: number;
  slug: string;
  name: string;
}

export interface CardType {
  gameModes?: number[];
  id: number;
  slug: string;
  name: string;
}

export interface HsClass {
  id: number;
  name: string;
  slug: string;
}

export interface Keyword {
  gameModes?: number[];
  id: number;
  name: string;
  slug: string;
}

export interface MinionType {
  gameModes?: number[];
  id: number;
  name: string;
  slug: string;
}

export interface Rarity {
  id: number;
  name: string;
  slug: string;
}

export interface SpellSchool {
  gameModes?: number[];
  id: number;
  name: string;
  slug: string;
}

export interface Metadata {
  cardSets: CardSet[];
  classes: HsClass[];
  rarities: Rarity[];
  keywords: Keyword[];
  minionTypes: MinionType[];
  spellSchools: SpellSchool[];
  types: CardType[];

  attackOptions: Set<number>;
  healthOptions: Set<number>;
  manaCostOptions: Set<number>;

  standardSetIds: Set<number>;
}

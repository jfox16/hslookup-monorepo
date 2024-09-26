
import axios from 'axios';
import { SERVER_URL } from 'globalConstants';
import _ from 'lodash';
import { Card } from 'types/cardTypes';
import { CardSet, CardType, HsClass, Keyword, Metadata, MinionType, Rarity, SpellSchool } from 'types/metadataTypes';

export const fetchCardData = async (args: { raw?: boolean } = {}) => {
  const { raw } = args;

  try {
    const res = await axios.get(`${SERVER_URL}api/cardData`);
    if (raw) {
      return res.data;
    }
    const transformedData = transformCardData(res.data);
    return transformedData;
  }
  catch (err) {
    console.error('Error fetching card data:', err)
  }
}

const transformCardData = (cardData: any): { cards: Card[], metadata: Metadata } => {
  // Cards
  const cards: Card[] = cardData.cards.map((card: any, i: number) => {
    return card;
  });

  // Metadata
  let cardSets: CardSet[] = cardData.metadata?.sets?.map((set: any) => _.pick(set, ['hyped', 'id', 'name', 'slug', 'type']))
    .map((cardSet: CardSet) => {
      // Fix Classic Set. Minions in Classic have a cardSetId of 3 for some reason
      if (cardSet.id === 1646) {
        cardSet.id = 3;
      }
      return cardSet;
    });
  const classes: HsClass[] = cardData.metadata?.classes?.map((_class: any) => _.pick(_class, ['id', 'name', 'slug']));
  const keywords: Keyword[] = cardData.metadata?.keywords?.map((_class: any) => _.pick(_class, ['gameModes', 'id', 'name', 'slug']));
  const minionTypes: MinionType[] = cardData.metadata?.minionTypes?.map((_class: any) => _.pick(_class, ['gameModes', 'id', 'name', 'slug']));
  const rarities: Rarity[] = cardData.metadata?.rarities?.map((_class: any) => _.pick(_class, ['id', 'name', 'slug']));
  const spellSchools: SpellSchool[] = cardData.metadata?.spellSchools?.map((_class: any) => _.pick(_class, ['gameModes', 'id', 'name', 'slug']));
  const types: CardType[] = cardData.metadata?.types?.map((type: any) => _.pick(type, ['gameModes', 'id', 'name', 'slug']));

  // Numeric
  const manaCostOptions = new Set<number>();
  const attackOptions = new Set<number>();
  const healthOptions = new Set<number>();

  cards.forEach((card) => {
    manaCostOptions.add(card.manaCost);
    if (card.attack !== undefined) {
      attackOptions.add(card.attack);
    }
    if (card.health !== undefined) {
      healthOptions.add(card.health)
    }
  })

  const makeSlugMap = (items: { id: number, slug: string }[]) => {
    const map: Record<string, number> = {};
    items.forEach((item) => {
      map[item.slug] = item.id;
    })
    return map;
  }

  // Card Sets
  const cardSetsMap = makeSlugMap(cardSets);
  const standardSetSlugs = cardData.metadata?.setGroups?.find((setGroup: any) => setGroup.slug === 'standard')?.cardSets ?? [];
  standardSetSlugs.push('classic-cards');
  const standardSetIds = new Set<number>(standardSetSlugs.map((setSlug: any) => cardSetsMap[setSlug]));
  
  const metadata: Metadata = {
    cardSets,
    classes,
    keywords,
    minionTypes,
    rarities,
    spellSchools,
    types,

    attackOptions,
    manaCostOptions,
    healthOptions,

    // cardSetsMap: makeSlugMap(cardSets),
    // classesMap: makeSlugMap(classes),
    // keywordsMap: makeSlugMap(keywords),
    // minionTypesMap: makeSlugMap(minionTypes),
    // raritiesMap: makeSlugMap(rarities),
    // spellSchoolsMap: makeSlugMap(spellSchools),
    // typesMap: makeSlugMap(types),

    standardSetIds,
  };

  return {
    cards,
    metadata,
  }
}

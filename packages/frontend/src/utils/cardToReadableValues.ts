import { Card } from "types/cardTypes";
import { Metadata } from "types/metadataTypes";

import { arrayToLookupMap } from "./arrayToLookupMap";

export const cardToReadableValues = (card: Card|null|undefined, metadata: Metadata) => {
  if (!card) {
    return undefined;
  }

  const cardSetMap = arrayToLookupMap(metadata.cardSets, 'id');
  const cardTypeMap = arrayToLookupMap(metadata.types, 'id');
  const classesMap = arrayToLookupMap(metadata.classes, 'id');
  const keywordsMap = arrayToLookupMap(metadata.keywords, 'id');
  const minionTypesMap = arrayToLookupMap(metadata.minionTypes, 'id');
  const rarityMap = arrayToLookupMap(metadata.rarities, 'id');
  const spellSchoolMap = arrayToLookupMap(metadata.spellSchools, 'id');

  const cardSet = (cardSetMap[card.cardSetId ?? NaN])?.name;
  const cardType = (cardTypeMap[card.cardTypeId ?? NaN])?.name;

  const classes: string[] = [];
  const classIdSet = new Set([
    card.classId,
    ...(card.multiClassIds ?? [])
  ]);
  classIdSet.forEach(classId => {
    const name = classesMap[classId]?.name;
    if (name) {
      classes.push(name);
    }
  })

  const keywords: string[] = [];
  (card.keywordIds ?? []).forEach(keywordId => {
    const name = keywordsMap[keywordId]?.name;
    if (name) {
      keywords.push(name);
    }
  });

  const minionTypes: string[] = [];
  const minionTypeIdSet = new Set([
    card.minionTypeId,
    ...(card.multiTypeIds ?? [])
  ]);
  minionTypeIdSet.forEach(minionTypeId => {
    const name = minionTypesMap[minionTypeId ?? NaN]?.name;
    if (name) {
      minionTypes.push(name);
    }
  });

  const rarity = (rarityMap[card.rarityId])?.name;
  const spellSchool = (spellSchoolMap[card.spellSchoolId ?? NaN])?.name;

  return {
    attack: card.attack,
    cardSet,
    cardType,
    classes,
    health: card.health,
    id: card.id,
    image: card.image,
    keywords,
    manaCost: card.manaCost,
    minionTypes,
    name: card.name,
    rarity,
    spellSchool,
    text: card.text,
  }
}

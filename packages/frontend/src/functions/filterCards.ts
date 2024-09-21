import { Card } from "types/cardTypes";
import { LookupFilter } from "types/filterTypes";
import { Metadata } from "types/metadataTypes";

export const filterCards = async (
  cards: Card[],
  metadata: Metadata,
  filter: LookupFilter
) => {

  const filterByCardSet = (card: Card) => {
    if (!filter.cardSetId || filter.cardSetId === 'wild') {
      return true;
    }
    if (filter.cardSetId === 'standard') {
      return metadata.standardSetIds.has(card.cardSetId);
    }
    return card.cardSetId === filter.cardSetId;
  }

  const filterByClass = (card: Card) => {
    if (filter.classIds.size === 0) {
      return true;
    }
    if (card.multiClassIds?.some(classId => filter.classIds.has(classId))) {
      return true;
    }
    return filter.classIds.has(card.classId);
  }

  const allId = metadata.minionTypes.find(minionType => minionType.slug === 'all')?.id;

  const filterByMinionType = (card: Card) => {
    if (!filter.minionTypeId || filter.minionTypeId === allId) {
      return true;
    }
    if (card.multiTypeIds?.some(typeId => typeId === filter.minionTypeId)) {
      return true;
    }
    return card.minionTypeId === filter.minionTypeId;
  }

  const filterByKeyword = (card: Card) => {
    if (filter.keywordId === undefined) {
      return true;
    }
    return card.keywordIds?.some(keywordId => keywordId === filter.keywordId)
  }

  const filterByDiscoverable = (card: Card) => {
    return card.bannedFromSideboard !== 1;
  }

  const filterByBasicKey = (card: Card, filterKey: keyof LookupFilter & keyof Card) => {
    if (filter[filterKey] === undefined) {
      return true;
    }
    return card[filterKey] === filter[filterKey];
  }

  const result = cards
    .filter(filterByCardSet)
    .filter(filterByClass)
    .filter(filterByMinionType)
    .filter(filterByDiscoverable)
    .filter(filterByKeyword)
    .filter(card => filterByBasicKey(card, 'cardTypeId'))
    .filter(card => filterByBasicKey(card, 'manaCost'))
    .filter(card => filterByBasicKey(card, 'attack'))
    .filter(card => filterByBasicKey(card, 'health'))
    .filter(card => filterByBasicKey(card, 'rarityId'))
    .filter(card => filterByBasicKey(card, 'spellSchoolId'))
    .sort((a, b) => a.name.localeCompare(b.name))
    .sort((a, b) => a.manaCost - b.manaCost);

  return result;
}

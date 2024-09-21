import { LookupFilter } from "types/filterTypes"
import { HsClass, Metadata } from "types/metadataTypes"
import { mapArrayById } from "./mapArrayById"
import { joinArrayWithAnd } from "utils/joinArrayWithAnd"


export const generateFilterDescription = (filter: LookupFilter, metadata: Metadata) => {
  let filterDescription = 'All'

  const errorDescription = 'Error in URL. Reset page or try another URL.'

  // Classes
  const classIdMap = mapArrayById(metadata.classes);
  const classNames: string[] = [];

  filter.classIds.forEach((classId) => {
    const hsClass = classIdMap[classId];
    if (hsClass) {
      classNames.push(hsClass.name);
    }
  });

  const classDescription = joinArrayWithAnd(classNames);

  // let isFirstNumeric = true

  // // Mana Cost
  // if (filter.manaCost) {
  //   if (isFirstNumeric) isFirstNumeric = false
  //   else filterDescription += ','
  //   filterDescription += ' ' + filter.manaCost + '-Cost'
  // }

  // // Health
  // if (filter.health) {
  //   if (isFirstNumeric) isFirstNumeric = false
  //   else filterDescription += ','
  //   filterDescription += ' ' + filter.health + '-Health'
  // }

  // // Attack
  // if (filter.attack) {
  //   if (isFirstNumeric) isFirstNumeric = false
  //   else filterDescription += ','
  //   filterDescription += ' ' + filter.attack + '-Attack'
  // }

  // // Rarity
  // if (filter.rarity)
  //   filterDescription += descriptionTokens.rarity[filter.rarity]

  // // Keyword
  // if (filter.keyword)
  //   filterDescription += descriptionTokens.keyword[filter.keyword]

  // // minion type / card type
  // if (filter.minionType) {
  //   filterDescription += descriptionTokens.minionType[filter.minionType]
  // } else if (filter.cardType) {
  //   filterDescription += descriptionTokens.cardType[filter.cardType]
  // } else {
  //   filterDescription += descriptionTokens.cardType.default
  // }

  // // Card Set
  // if (!filter.cardSet) {
  //   filterDescription += descriptionTokens.cardSet.wild
  // } else {
  //   filterDescription += descriptionTokens.cardSet[filter.cardSet]
  // }

  return [
    classDescription
  ].join(' ');
}

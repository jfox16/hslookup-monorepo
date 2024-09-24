import { escapeRegExp } from "lodash";
import { parseInherentKeywordIds } from "./parseInherentKeywordIds"

export const processCardData = (cards: any[], metadata: any) => {
  const processedKeywords = processKeywordsFromMetadata(metadata);

  cards.forEach((card) => {
    const cardKeywordIds = parseInherentKeywordIds(card.text, processedKeywords);
    card.keywordIds = cardKeywordIds;
  });
}

export const processKeywordsFromMetadata = (metadata: any) => {
  const keywords = metadata?.keywords?.map((keyword: any) => {
    let keywordName = keyword.name;
    
    // Overload is weird, replace its X stuff with nothing
    if (keywordName.includes('Overload')) {
      keywordName = keywordName.replace(': X', '');
    }

    // All the other X's should match 1-3 digits
    keyword.regex = escapeRegExp(keywordName)
      .replace(/X/g, '[0-9 ]{1,3}');

    return keyword;
  });

  // Gigantify isn't in metadata. Count it as a keyword
  keywords.push({
    name: 'Gigantify',
    regex: 'Gigantify',
    id: -1,
  })

  return keywords
}

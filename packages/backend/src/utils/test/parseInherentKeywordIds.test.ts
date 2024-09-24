import { escapeRegExp } from "lodash";

import { parseInherentKeywordIds } from "../parseInherentKeywordIds";
import { METADATA_STUB } from "./testMetadata";
import { TEST_STRINGS } from "./testStrings";
import { processKeywordsFromMetadata } from "../processCardData";

describe('parse inherent keywords', () => {
  test('should have the right results', () => {
    const processedKeywords = processKeywordsFromMetadata(METADATA_STUB);
    
    const keywordIdMap: Record<number, any> = {};
    METADATA_STUB.keywords.forEach(keyword => {
      keywordIdMap[keyword.id] = keyword;
    });
    
    TEST_STRINGS.forEach(({ text, resultKeywords }) => {
      const keywordIds = parseInherentKeywordIds(text, processedKeywords);
      
      const keywordNames: string[] = [];

      keywordIds
        .forEach(keywordId => {
          const name = keywordIdMap[keywordId]?.name;
          if (name) {
            keywordNames.push(name)
          }
        });

      keywordNames.sort();
      
      expect(keywordNames)
        .toStrictEqual(resultKeywords);
    })
  })
})

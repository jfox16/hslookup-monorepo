import { useMemo, useState } from 'react';

import { useLookupContext } from 'context/LookupContext/LookupContext';
import { generateKeywordTotals } from 'modules/hearthstone-card-stats';

import { PercentageDisplay } from '../PercentageDisplay/PercentageDisplay';
import { PercentageDisplayItemProps } from '../PercentageDisplay/PercentageDisplayItem';

const defaultKeywords = new Set([
  'Taunt',
  'Divine Shield',
  'Charge',
  'Deathrattle',
  'Poisonous',
  'Lifesteal',
  'Rush',
  'Reborn',
  'Colossal +X',
  'Titan',
  'Starship',
]);

export const KeywordDisplay = () => {
  const { metadata, filteredCards, filter, setFilterValue } = useLookupContext();

  const [showMore, setShowMore] = useState(false);

  const {
    keywordTotals,
    hasHiddenKeywords
  } = useMemo(() => {
    const allTotals = generateKeywordTotals(filteredCards, metadata)
      .sort((a, b) => b.decimal - a.decimal);
    const defaultTotals = allTotals.filter((item) => defaultKeywords.has(item.keyword.name));
    return {
      keywordTotals: showMore ? allTotals : defaultTotals,
      hasHiddenKeywords: allTotals.length > defaultTotals.length,
    }
  }, [
    filteredCards,
    metadata,
    showMore,
  ]);

  const displayItems = useMemo(() => {
    const items: PercentageDisplayItemProps[] = keywordTotals.map(({ decimal, keyword }) => {
      const selected = keyword.id !== undefined && filter.keywordId === keyword.id;
      const onClick = () => {
        if (keyword.id !== undefined) {
          setFilterValue('keywordId', selected ? undefined : keyword.id);
        }
      }
      return {
        decimal,
        name: keyword.name,
        id: keyword.id,
        onClick,
        selected,
      }
    });

    items.push({
      className: 'secondary',
      name: '(Discover)',
      decimal: Math.min(1, 3 / filteredCards.length)
    });

    items.push({
      className: 'secondary',
      name: '(Draw)',
      decimal: 1 / filteredCards.length
    });

    return items;
  }, [
    filter.keywordId,
    filteredCards.length,
    keywordTotals,
    setFilterValue
  ]);

  return (
    <PercentageDisplay
      displayItems={displayItems}
      hasHiddenItems={hasHiddenKeywords}
      showMore={showMore}
      setShowMore={setShowMore}
      title="Keywords"
    />
  )
}

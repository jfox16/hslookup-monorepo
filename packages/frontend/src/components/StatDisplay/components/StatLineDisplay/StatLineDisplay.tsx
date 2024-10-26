import { useMemo, useState } from "react";

import { useLookupContext } from "context/LookupContext/LookupContext"

import { PercentageDisplay } from "../PercentageDisplay/PercentageDisplay"
import { PercentageDisplayItemProps } from "../PercentageDisplay/PercentageDisplayItem";

import './StatLineDisplay.css';

export const StatLineDisplay = () => {
  const { filter, filteredCards, statLineFrequencies, setFilter } = useLookupContext();

  const [ showMore, setShowMore ] = useState(false);

  const {
    displayItems,
    hasHiddenItems,
  } = useMemo(() => {
    const decimalFactor = 1 / filteredCards.length;
    const items: PercentageDisplayItemProps[] = statLineFrequencies
      .map(({ attack, health, count }) => {
        const selected = filter.attack === attack && filter.health === health;
        const onClick = () => {
          setFilter({
            ...filter,
            ...(selected ? { attack: undefined, health: undefined } : { attack, health })
          })
        }
        return {
          className: 'statLineDisplay',
          name: `${attack}/${health}`,
          decimal: count * decimalFactor,
          onClick,
          selected,
        };
      });

    const defaultItems = items.slice(0, 12);

    return {
      displayItems: showMore ? items : defaultItems,
      hasHiddenItems: items.length > defaultItems.length,
    };
  }, [
    filter,
    filteredCards,
    showMore,
    setFilter,
    statLineFrequencies,
  ])

  return (
    <PercentageDisplay
      displayItems={displayItems}
      hasHiddenItems={hasHiddenItems}
      showMore={showMore}
      setShowMore={setShowMore}
      title="Minion Stat Lines"
    />
  )
}

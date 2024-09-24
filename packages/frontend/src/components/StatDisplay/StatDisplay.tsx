
import { useMemo, useState } from 'react'
import Skeleton from 'react-loading-skeleton'

import { useLookupContext } from 'context/LookupContext/LookupContext'
import {
  generateStatTotals,
  generateKeywordTotals,
} from 'modules/hearthstone-card-stats'
import { DisplayStat } from 'types/statDisplayTypes'
import { pluralize } from 'utils/pluralize'

import { KeywordDisplay } from './components/KeywordDisplay/KeywordDisplay'
import { StatDiv } from './components/StatDiv/StatDiv'
import { StatDivSkeleton } from './components/StatDiv/StatDivSkeleton'

import attackImg from 'img/stats/attack.png'
import healthImg from 'img/stats/health.png'
import manaCostImg from 'img/stats/mana.png'

import './StatDisplay.css'

const statsToTrack: DisplayStat[] = [
  { name: 'Attack', accessor: 'attack', color: '#FEDC42', image: attackImg },
  { name: 'Health', accessor: 'health', color: '#FE4756', image: healthImg },
  {
    name: 'Mana Cost',
    accessor: 'manaCost',
    color: '#4080ff',
    image: manaCostImg
  }
]

export const StatDisplay = () => {
  const {
    filterDescription,
    filteredCards,
    filterFormOpen,
    isMobile,
    metadata
  } = useLookupContext();

  const [showMore, setShowMore] = useState(false)

  const isLoading = !metadata;
  // const isLoading = true;

  const keywordTotals = useMemo(() => {
    return generateKeywordTotals(filteredCards, metadata);
  }, [
    filteredCards,
    metadata
  ])

  const statTotals = useMemo(() => {
    return generateStatTotals(filteredCards);
  }, [
    filteredCards
  ])

  const statsToDisplay = useMemo(() => {
    const result = statsToTrack
      .filter((stat) => {
        return Object.values(statTotals[stat.accessor].frequencies).length > 0;
      });
    return result;
  }, [
    statTotals
  ]);

  return (
    <div className="StatDisplay">
      <div className="StatDisplayHeader">
        <p className="filter-description">
          {!isLoading ? filterDescription : <Skeleton width={300} />}
        </p>
        <h1 className="card-count">
          {!isLoading ? (
          `${filteredCards.length} ${pluralize('card', filteredCards.length)}`
          ) : (
            <Skeleton width={300} />
          )}
        </h1>
      </div>

      <div className="StatDisplayData">
        {!isLoading
          ? statsToDisplay.map((stat) => (
              <StatDiv
                stat={stat}
                totals={statTotals && statTotals[stat.accessor]}
                key={stat.name}
              />
            ))
          : [new Array(3)].map((_, i) => <StatDivSkeleton key={i} />)}
      </div>

      {keywordTotals && (
        <KeywordDisplay keywordTotals={keywordTotals} />
      )}
    </div>
  )
}

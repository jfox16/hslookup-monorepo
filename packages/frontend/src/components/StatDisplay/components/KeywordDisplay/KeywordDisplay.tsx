import { useMemo, useState } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { MdExpandLess } from 'react-icons/md'

import IconButton from 'components/IconButton'
import { useLookupContext } from 'context/LookupContext/LookupContext'
import { KeywordTotal } from 'types/statDisplayTypes'

import './KeywordDisplay.css'
import { KeywordDisplayItem } from './KeywordDisplayItem'

export interface KeywordDisplayProps {
  keywordTotals: Record<string, KeywordTotal>;
}

export const KeywordDisplay = ({ keywordTotals }: KeywordDisplayProps) => {
  const { filteredCards, isMobile } = useLookupContext();

  const [showMore, setShowMore] = useState(false);

  const keywordsToShow = useMemo(() => {
    if (!keywordTotals) {
      return [];
    }
    return Object.keys(keywordTotals)
      .filter(key => {
        return keywordTotals[key].count > 0;
      });
  }, [
    keywordTotals
  ]);

  const displayItems = useMemo(() => {
    const result = keywordsToShow
      .map((keyword) => {
        const total = keywordTotals[keyword]
        const decimal = total.count / filteredCards.length
        const name = total.name
        return { name, decimal };
      })
      .sort((a, b) => b.decimal - a.decimal);
  
    return (isMobile && !showMore) ? result.slice(0, 6) : result;  
  }, [
    filteredCards.length,
    isMobile,
    keywordsToShow,
    keywordTotals,
    showMore,
  ])

  const shouldDisplay = useMemo(() => {
    return displayItems.length > 0 && displayItems.some(item => item.decimal > 0);
  }, [
    displayItems
  ])

  return shouldDisplay ? (
    <div style={{ textAlign: 'center' }}>
      <div className="KeywordDisplay">
        <div className="Keywords">
          {displayItems.map((item) => {
            return (
              <KeywordDisplayItem
                name={item.name}
                decimal={item.decimal}
                key={item.name}
              />
            )
          })}
          <KeywordDisplayItem
            name="Discover Chance"
            decimal={Math.min(1, 3 / filteredCards.length)}
          />
          <KeywordDisplayItem
            name="Draw Chance"
            decimal={1 / filteredCards.length}
          />
        </div>
        {isMobile && (
          <div style={{ textAlign: 'center' }}>
            <IconButton
              onClick={() => setShowMore(!showMore)}
              style={{ fontSize: 24 }}
            >
              {showMore ? <MdExpandLess /> : <FiMoreHorizontal />}
            </IconButton>
          </div>
        )}
      </div>
    </div>
  ) : <></>;
}

import { useMemo } from 'react';

import { useLookupContext } from 'context/LookupContext/LookupContext';
import { generateKeywordTotals } from 'modules/hearthstone-card-stats';

import { KeywordDisplayItem } from './KeywordDisplayItem';

import './KeywordDisplay.css';

export const KeywordDisplay = () => {
  const { metadata, filteredCards } = useLookupContext();

  // const [showMore, setShowMore] = useState(false);

  const keywordTotals = useMemo(() => {
    return generateKeywordTotals(filteredCards, metadata)
      .sort((a, b) => b.decimal - a.decimal);
  }, [
    filteredCards,
    metadata
  ]);

  return keywordTotals.length > 0 ? (
    <div style={{ textAlign: 'center' }}>
      <div className="KeywordDisplay">
        <div className="Keywords">
          {keywordTotals.map(({ decimal, keyword }) => {
            const { id, name, } = keyword;
            return (
              <KeywordDisplayItem
                keywordId={id}
                name={name}
                decimal={decimal}
                key={id}
              />
            );
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
        {/* {isMobile && (
          <div style={{ textAlign: 'center' }}>
            <IconButton
              onClick={() => setShowMore(!showMore)}
              style={{ fontSize: 24 }}
            >
              {showMore ? <MdExpandLess /> : <FiMoreHorizontal />}
            </IconButton>
          </div>
        )} */}
      </div>
    </div>
  ) : <></>;
}

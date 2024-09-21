
import { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Skeleton from 'react-loading-skeleton';

import { useLookupContext } from 'context/LookupContext/LookupContext';
import { Card } from 'types/cardTypes';

import './CardImageDisplay.css'
import { CardImage } from 'components/CardImage/CardImage';

const ITEMS_PER_PAGE = 20;

export const CardImageDisplay = () => {
  const { filteredCards, setSelectedCard, isMobile } = useLookupContext();

  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedCards, setDisplayedCards] = useState<Card[]>([])

  useEffect(() => {
    setDisplayedCards([]);
    setCurrentIndex(0);
  }, [filteredCards]);
  
  // loadMore() is called by InfiniteScroll to load more cards when the bottom of the page is reached.
  const loadMore = useCallback(() => {
    const newIndex = currentIndex + ITEMS_PER_PAGE;
    if (filteredCards) {
      setDisplayedCards(filteredCards.slice(0, newIndex))
    }
    setCurrentIndex(newIndex)
  }, [
    currentIndex,
    filteredCards,
  ]);

  const handleCardClick = useCallback((card: Card) => {
    setSelectedCard(card);
  }, [setSelectedCard]);
  
  return (filteredCards?.length === 0) ? (
    <div style={{ textAlign: 'center', marginTop: 48 }}>
      (No cards found. Try changing the filters.)
    </div>
  ) : (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={filteredCards && currentIndex <= filteredCards.length - 1}
        threshold={225}
      >
        <div className="CardImageDisplay">
          {filteredCards
            ? displayedCards.map((card) => (
                <div
                  key={'card-image-' + card.id}
                >
                  <CardImage
                    card={card} 
                    onClick={() => handleCardClick(card)}
                  />
                </div>
              ))
            : [new Array(30)].map((_, i) => (
                <div
                  key={i}
                  style={{ margin: '8px' }}
                >
                  <Skeleton height={isMobile ? 165 : 270} />
                </div>
              ))}
        </div>
      </InfiniteScroll>
    </div>
  )
}

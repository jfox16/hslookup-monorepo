import { useCallback, useMemo, useState } from "react";

import cardPlaceholder from 'img/card-placeholder.png';  
import { Card } from "types/cardTypes";

import './CardImage.css';

type ImageType = 'standard' | 'mini' | 'miniLocation';

interface CardImageProps {
  card: Card;
  onClick?: () => void;
}

export const CardImage = ({
  card,
  onClick
}: CardImageProps) => {
  const [ imageType, setImageType ] = useState<ImageType | undefined>();
  const [ loaded, setLoaded ] = useState(false);

  const onLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    /**
     * Certain card images are scaled differently from others. In order to maintain a consistent look,
     * we check for these specific cases and adjust the image CSS to make them match.
     */
    if (target.naturalWidth === 404 && target.naturalHeight === 558) {
      if (card.cardTypeId === 39) {
        setImageType('miniLocation');
      }
      else {
        setImageType('mini');
      }
    }
    else {
      setImageType('standard');
    }
    setLoaded(true);
  }, [
    card.cardTypeId
  ])

  const {
    marginLeft,
    width,
  } = useMemo(() => {
    if (imageType === 'miniLocation') {
      return {
        width: '98.6%',
      }
    }
    if (imageType === 'mini') {
      return {
        marginLeft: '-4.1%',
        width: '108.2%',
      }
    }
    else {
      return {
        width: '100%'
      }
    }
  }, [
    imageType
  ]);

  return (
    <div className="CardImageContainer">
      {!loaded && <img alt="Card Placeholder" className="cardPlaceholder" src={cardPlaceholder} />}
      <img
        alt={card.name}
        src={card.image}
        onClick={onClick}
        onLoad={onLoad}
        style={{
          cursor: onClick ? 'pointer' : undefined,
          marginLeft,
          width,
          display: loaded ? undefined : 'none',
        }}
      />
    </div>
  )
}

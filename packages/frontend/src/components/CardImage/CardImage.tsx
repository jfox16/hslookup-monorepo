import { useCallback, useMemo, useState } from "react";

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

  const onLoad = useCallback((e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // Set specific image scale images with these dimensions
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
      <img
        alt={card.name}
        src={card.image}
        onClick={onClick}
        onLoad={onLoad}
        style={{
          cursor: onClick ? 'pointer' : undefined,
          marginLeft,
          width,
          visibility: imageType ? undefined : 'hidden',
        }}
      />
    </div>
  )
}

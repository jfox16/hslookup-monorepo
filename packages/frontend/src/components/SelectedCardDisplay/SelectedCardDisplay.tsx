import { useEffect, useMemo } from 'react';

import { useLookupContext } from 'context/LookupContext/LookupContext';
import { cardToReadableValues } from 'utils/cardToReadableValues';
import { joinArrayWithAnd } from 'utils/joinArrayWithAnd';
import { pluralize } from 'utils/pluralize';

import './SelectedCardDisplay.css';

export const SelectedCardDisplay = () => {
  const { metadata, selectedCard } = useLookupContext();

  useEffect(() => {
    if (selectedCard) {
      console.info('Selected', selectedCard.name, selectedCard);
    }
  }, [
    selectedCard
  ]);

  const cardValues = useMemo(() => {
    return cardToReadableValues(selectedCard, metadata);
  }, [
    metadata,
    selectedCard
  ]);

  return cardValues ? (
    <div className="SelectedCardDisplay">
      <div className="cardImage">
        <img src={cardValues.image} alt={cardValues.name} />
      </div>
      <div className="cardProperties">
        <h3>{cardValues.name}</h3>
        {cardValues.text && (
          <>
            <p>Text: <span dangerouslySetInnerHTML={{ __html: cardValues.text }}></span></p>
            <div style={{height: 8}}/>
          </>
        )}
        <p>Set: <b>{cardValues.cardSet}</b></p>
        <p>Type: <b>{cardValues.cardType}</b></p>
        {cardValues.classes.length > 0 && <p>{pluralize('Class', cardValues.classes.length)}: <b>{joinArrayWithAnd(cardValues.classes)}</b></p>}
        {cardValues.manaCost !== undefined && <p>Cost: <b>{cardValues.manaCost}</b></p>}
        {cardValues.attack !== undefined && <p>Attack: <b>{cardValues.attack}</b></p>}
        {cardValues.health !== undefined && <p>Health: <b>{cardValues.health}</b></p>}
        {cardValues.keywords.length > 0 && <p>Keywords: <b>{joinArrayWithAnd(cardValues.keywords)}</b></p>}
        {cardValues.rarity && <p>Rarity: <b>{cardValues.rarity}</b></p>}
        {cardValues.minionTypes.length > 0 && <p>{pluralize('Minion Type', cardValues.minionTypes.length)}: <b>{joinArrayWithAnd(cardValues.minionTypes)}</b></p>}
        {cardValues.spellSchool && <p>Spell School: <b>{cardValues.spellSchool}</b></p>}
      </div>
    </div>
  ) : null;
}

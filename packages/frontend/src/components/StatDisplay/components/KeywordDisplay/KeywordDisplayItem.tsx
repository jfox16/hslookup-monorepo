import cns from 'classnames';
import { useCallback, useMemo } from 'react';

import { useLookupContext } from 'context/LookupContext/LookupContext';

interface KeywordDisplayItemProps {
  keywordId?: number;
  name: string;
  decimal: number;
}

export const KeywordDisplayItem = ({ keywordId, name, decimal }: KeywordDisplayItemProps) => {
  const { filter, setFilterValue } = useLookupContext();

  const selected = useMemo(() => {
    return keywordId !== undefined && filter.keywordId === keywordId
  }, [
    filter,
    keywordId
  ])

  const handleClick = useCallback(() => {
    if (keywordId !== undefined) {
      setFilterValue('keywordId', selected ? undefined : keywordId);
    }
  }, [
    keywordId,
    selected,
    setFilterValue,
  ]);

  return (
    <div
      className={cns('KeywordDisplayDiv', {
        selectable: keywordId !== undefined,
        selected
      })}
      onClick={handleClick}
    >
      <p>{name}</p>
      {decimal ? (
        <p className="KeywordPercentage">
          {makePercentage(decimal)}
        </p>
      ) : null}
    </div>
  )
}

const makePercentage = (decimalValue: number) => {
  const percent = decimalValue * 100
  if (percent < 0.2) {
    return percent.toFixed(2) + '%'
  } else {
    return percent.toFixed(1) + '%'
  }
}

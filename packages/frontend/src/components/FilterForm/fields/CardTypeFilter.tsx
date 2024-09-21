import { useCallback, useMemo } from 'react';

import Dropdown from 'components/Dropdown';
import { InputLabel } from 'components/FilterForm/shared/InputLabel/InputLabel';
import { useLookupContext } from 'context/LookupContext/LookupContext';
import { ANY_OPTION } from 'globalConstants';

export const CardTypeFilter = () => {
  const { metadata, filter, setFilterValue } = useLookupContext();

  const options = useMemo(() => {
    return [
      ANY_OPTION,
      ...metadata.types
      .filter(cardType => cardType.gameModes?.includes(1))
      .map(cardType => ({ label: cardType.name, value: cardType.id }))
    ];
  }, [
    metadata?.types,
  ]);

  const handleChange = useCallback((value: string) => {
    setFilterValue('cardTypeId', value === '' ? undefined : +value);
  }, [setFilterValue])

  return (
    <div>
      <InputLabel label="CARD TYPE" />
      <Dropdown
        options={options}
        onChange={handleChange}
        value={filter.cardTypeId ?? ''}
      />
    </div>
  )
}

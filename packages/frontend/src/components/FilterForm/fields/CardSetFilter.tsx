import { useCallback, useMemo } from 'react'

import Dropdown from 'components/Dropdown'
import { InputLabel } from 'components/FilterForm/shared/InputLabel/InputLabel';
import { useLookupContext } from 'context/LookupContext/LookupContext'

export const CardSetFilter = () => {
  const {
    filter,
    setFilterValue,
    metadata,
  } = useLookupContext();

  const options = useMemo(() => {
    return [
      {
        value: 'formats-divider',
        label: '───── Formats ─────',
        disabled: true
      },
      { value: 'wild', label: 'Wild' },
      { value: 'standard', label: 'Standard' },
      {
        value: 'sets-divider',
        label: '───── Sets ─────',
        disabled: true
      },
      ...(metadata?.cardSets ?? []).map(set => ({ value: set.id, label: set.name })),
    ];
  }, [
    metadata?.cardSets,
  ]);

  const handleChange = useCallback(
    (value: string) => {
      if (
        value === 'wild' ||
        value === 'standard'
      ) {
        setFilterValue('cardSetId', value)
      }
      else {
        setFilterValue('cardSetId', +value);
      }
    },
    [setFilterValue]
  );

  return (
    <div>
      <InputLabel label="CARD SET" />
      <Dropdown
        options={options}
        onChange={handleChange}
        value={filter.cardSetId ?? ''}
      />
    </div>
  )
}

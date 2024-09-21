import { useMemo } from 'react';

import { InputLabel } from 'components/FilterForm/shared/InputLabel/InputLabel';
import Dropdown from 'components/Dropdown';
import { useLookupContext } from 'context/LookupContext/LookupContext'
import { ANY_OPTION } from 'globalConstants';

import './NumericFilterGroup.css'

export const NumericFilterGroup = () => {
  const { filter, setFilterValue, metadata } = useLookupContext();

  const manaCostOptions = useMemo(() => {
    const options = [
      ANY_OPTION,
      ...Array.from(metadata.manaCostOptions)
        .sort((a,b) => a - b)
        .map((manaCost) => ({
          label: String(manaCost),
          value: manaCost
        }))
    ];
    return options;
  }, [
    metadata.manaCostOptions,
  ])

  const attackOptions = useMemo(() => {
    const options = [
      ANY_OPTION,
      ...Array.from(metadata.attackOptions)
        .sort((a,b) => a - b)
        .map((attack) => ({
          label: String(attack),
          value: attack
        }))
    ];
    return options;
  }, [
    metadata.attackOptions,
  ]);

  const healthOptions = useMemo(() => {
    const options = [
      ANY_OPTION,
      ...Array.from(metadata.healthOptions)
        .sort((a,b) => a - b)
        .map((health) => ({
          label: String(health),
          value: health
        }))
    ];
    return options;
  }, [
    metadata.healthOptions,
  ]);

  return (
    <div className="NumericFilterGroup">
      <div>
        <InputLabel label="Mana" />
        <Dropdown
          options={manaCostOptions}
          value={filter.manaCost ?? ''}
          onChange={(value) => setFilterValue('manaCost', value === '' ? undefined : +value)}
        />

      </div>
      <div>
        <InputLabel label="Attack" />
        <Dropdown
          options={attackOptions}
          value={filter.attack ?? ''}
          onChange={(value) => {
            console.info({value})
            setFilterValue('attack', value === '' ? undefined : +value)}}
        />
      </div>
      <div>
        <InputLabel label="Health" />
        <Dropdown
          options={healthOptions}
          value={filter.health ?? ''}
          onChange={(value) => setFilterValue('health', value === '' ? undefined : +value)}
        />
      </div>
    </div>
  )
}

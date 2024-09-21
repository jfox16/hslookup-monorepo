import { useMemo } from "react";

import { useLookupContext } from "context/LookupContext/LookupContext"
import Dropdown from "components/Dropdown";
import { ANY_OPTION } from "globalConstants";

import { InputLabel } from "../shared/InputLabel/InputLabel";

export const RarityFilter = () => {
  const { metadata, filter, setFilterValue } = useLookupContext();

  const options = useMemo(() => {
    const options = [
      ANY_OPTION,
      ...metadata.rarities.map((rarity) => ({ label: rarity.name, value: rarity.id }))
    ];
    return options;
  }, [
    metadata.rarities
  ])

  return (
    <div>
      <InputLabel label="RARITY" />
      <Dropdown
        options={options}
        onChange={(value) => setFilterValue('rarityId', value === '' ? undefined : +value)}
        value={filter.rarityId || ''}
      />
    </div>
  )
}

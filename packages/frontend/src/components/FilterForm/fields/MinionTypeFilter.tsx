import { useMemo } from "react";

import Dropdown from "components/Dropdown";
import { useLookupContext } from "context/LookupContext/LookupContext"
import { ANY_OPTION } from "globalConstants";

import { InputLabel } from "../shared/InputLabel/InputLabel";

export const MinionTypeFilter = () => {
  const { metadata, filter, setFilterValue } = useLookupContext();

  const options = useMemo(() => {
    return [
      ANY_OPTION,
      ...metadata.minionTypes
        .sort((a, b) => a.name > b.name ? 1 : -1)
        .filter((minionType) => minionType.gameModes?.includes(1))
        .map((minionType) => ({
          label: minionType.name,
          value: minionType.id
        }))
    ];
  }, [metadata])

  return (
    <div>
      <InputLabel label="MINION TYPE" />
      <Dropdown
        options={options}
        onChange={(value) => setFilterValue('minionTypeId', value === '' ? undefined : +value)}
        value={filter.minionTypeId || ''}
      />
    </div>
  )
}

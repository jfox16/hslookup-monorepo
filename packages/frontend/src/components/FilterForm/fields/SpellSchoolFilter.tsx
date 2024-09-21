import { useMemo } from "react"

import Dropdown from "components/Dropdown";
import { useLookupContext } from "context/LookupContext/LookupContext"
import { ANY_OPTION } from "globalConstants";

import { InputLabel } from "../shared/InputLabel/InputLabel";

export const SpellSchoolFilter = () => {
  const { metadata, filter, setFilterValue } = useLookupContext();

  const options = useMemo(() => {
    const newOptions = [
      ANY_OPTION,
      ...metadata.spellSchools
        .sort((a, b) => a.name > b.name ? 1 : -1)
        .filter((spellSchool) => spellSchool.gameModes?.includes(1))
        .map((spellSchool) => ({
          label: spellSchool.name,
          value: spellSchool.id
        }))
    ]

    return newOptions;
  }, [metadata])

  return (
    <div>
      <InputLabel label="SPELL SCHOOL" />
      <Dropdown
        options={options}
        onChange={(value) => setFilterValue('spellSchoolId', value === '' ? undefined : +value)}
        value={filter.spellSchoolId || ''}
      />
    </div>
  )
}

import { useMemo } from "react";

import Dropdown from "components/Dropdown";
import { useLookupContext } from "context/LookupContext/LookupContext"
import { ANY_OPTION } from "globalConstants";

import { InputLabel } from "../shared/InputLabel/InputLabel";

export const KeywordFilter = () => {
  const { metadata, filter, setFilterValue } = useLookupContext();

  const options = useMemo(() => {
    return [
      ANY_OPTION,
      ...metadata.keywords
        .sort((a, b) => a.name > b.name ? 1 : -1)
        .filter((keyword) => keyword.gameModes?.includes(1))
        .map((keyword) => ({ label: keyword.name, value: keyword.id }))
    ];
  }, [
    metadata.keywords
  ])

  return (
    <div>
      <InputLabel label="KEYWORD" />
      <Dropdown
        options={options}
        onChange={(value) => setFilterValue('keywordId', value === '' ? undefined : +value)}
        value={filter.keywordId ?? ''}
      />
    </div>
  )
}

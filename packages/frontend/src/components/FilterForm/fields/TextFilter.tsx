import cns from 'classnames';

import { useLookupContext } from "context/LookupContext/LookupContext";

import { InputLabel } from "../shared/InputLabel/InputLabel";

export const TextFilter = () => {
  const { filter, setFilterValue } = useLookupContext();

  return (
    <div>
      <InputLabel label="TEXT SEARCH" />
      <input
        className={cns('selectable', {
          darkened: !filter.text
        })}
        value={filter.text ?? ''}
        onChange={(e) => setFilterValue('text', e.target.value)}
        placeholder="Search by card name or text"
      />
    </div>
  )
}

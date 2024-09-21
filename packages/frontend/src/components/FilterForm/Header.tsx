import React from "react";
import { MdOutlineClose } from "react-icons/md";

import { useLookupContext } from "context/LookupContext/LookupContext"

export const Header = ({ style }: { style?: React.CSSProperties }) => {
  const { isFilterChanged, clearFilters } = useLookupContext();

  return (
    <div>
      <div style={{ alignItems: 'flex-end', display: 'flex', width: '100%', ...style}}>
        <h1 style={{ flex: 'auto', }}>Filters</h1>
        <div
          onClick={clearFilters}
          style={{
            color: 'hsl(0, 0%, 60%)',
            cursor: 'pointer',
            display: 'flex',
            flexWrap: 'nowrap',
            visibility: isFilterChanged ? 'visible' : 'hidden'
          }}
        >
          Clear all
          {' '}
          <MdOutlineClose size={18} style={{ position: 'relative', top: 1.5 }} />
        </div>
      </div>
      {/* <InputLabel /> */}
    </div>
  )
}

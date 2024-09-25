import cns from 'classnames';
import React from 'react';

import './Dropdown.css'

export interface DropdownOption {
  className?: string,
  disabled?: boolean,
  label?: React.ReactNode,
  style?: React.CSSProperties,
  value: string|number|undefined,
  key?: string|number,
}

function Dropdown({ value, onChange, options }: {
  value: string|number|undefined,
  onChange: (value: string) => void;
  options: DropdownOption[];
}) {
  return (
    <div>
      <select
        className={cns('Dropdown selectable', { 'darkened': value !== 0 && !value })}
        onChange={(e) => onChange?.(e.target.value)}
        value={value}
      >
        {options.map((option) => (
          <option
            {...option}
            key={option.key ?? option.value}
            label=""
          >
            {option.label ?? option.value}
          </option>
        ))}
      </select>
      {/* <div className="DropdownChevronPositioner">
        <GoChevronDown style={{pointerEvents: 'none'}} />
      </div> */}
    </div>
  )
}

export default Dropdown

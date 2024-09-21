import React from 'react'
import cns from 'classnames';

import './NumericFilterInput.css'

interface NumericFilterInputProps {
  value?: string;
  setValue?: (value: string) => void;
}

export const NumericFilterInput = ({ value, setValue }: NumericFilterInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue?.(event.target.value)
  }

  return (
    <input
      className={cns("NumericFilterInput selectable",
        { 'darkened': value === undefined }
      )}
      onChange={handleChange}
      value={value}
      type="number"
      min={0}
      max={100}
    />
  )
}

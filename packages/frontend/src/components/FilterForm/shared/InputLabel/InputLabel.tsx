import React from 'react';
import './InputLabel.css'

interface InputLabelProps {
  hideLine?: boolean;
  label?: string;
  style?: React.CSSProperties;
}

export const InputLabel = ({ hideLine, label, style }: InputLabelProps) => {
  return (
    <div className="InputLabel" style={style}>
      <span className="InputLabelText">{label}</span>
      {!hideLine && <div className="InputLabelLine" />}
    </div>
  )
}

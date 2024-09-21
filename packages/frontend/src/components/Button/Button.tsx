import React from 'react';
import cns from 'classnames';

import './Button.css';

interface ButtonProps {
  children: React.ReactNode,
  onClick?: () => void;
  style?: React.CSSProperties;
  preset?: 'primary' | 'secondary';
}

export const Button = ({ children, onClick, style, preset = 'primary', }: ButtonProps) => {
  return (
    <button className={cns('button', { primary: preset === 'primary', secondary: preset === 'secondary' })} onClick={onClick} style={style}>
      {children}
    </button>
  )
}


import React from 'react';

import './IconButton.css'

interface IconButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  style?: React.CSSProperties;
}

const IconButton = ({ children, onClick, style }: IconButtonProps) => {
  return (
    <button className="icon-button" onClick={onClick} style={style}>
      {children}
    </button>
  )
}

export default IconButton


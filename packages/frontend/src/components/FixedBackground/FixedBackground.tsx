
import backgroundImage from 'img/bg/forged-in-the-barrens-bg.png';

import './FixedBackground.css'

export const FixedBackground = () => {
  return (
    <div
      className="fixed-background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  )
}

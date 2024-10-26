import backgroundImage from 'img/bg/great-dark-beyond-bg.jpg';

import './FixedBackground.css'

export const FixedBackground = () => {
  return (
    <div
      className="fixed-background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  )
}

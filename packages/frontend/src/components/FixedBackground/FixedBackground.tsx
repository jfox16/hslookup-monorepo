import backgroundImage from 'img/bg/Masthead_2600.jpg';

import './FixedBackground.css'

export const FixedBackground = () => {
  return (
    <div
      className="fixed-background"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    />
  )
}

import './Footer.css'

import { VERSION_NUMBER } from 'globalConstants'
import { FaGithubSquare } from 'react-icons/fa'
import { InputLabel } from '../InputLabel/InputLabel'

export const Footer = () => {
  return (
    <div className="Footer">
      <InputLabel
        label=""
        style={{ margin: '12px 12px'}}
      />

      <p>Copyright © {new Date().getFullYear()} Jonathan Fox </p>

      <div style={{ height: '8px' }} />
      
      <p>
        Hearthstone is a trademark or registered trademark of Blizzard
        Entertainment, Inc., in the U.S. and/or other countries.
      </p>

      <div style={{ height: '8px' }} />

      <p>HSLookup v{VERSION_NUMBER}</p>

      <p>Updated 2024/09/25 </p>

      <div style={{ height: '8px' }} />

      <p>
        <a href="https://github.com/jfox16/hslookup-monorepo">
          <FaGithubSquare /> HSLookup GitHub Repository
        </a>
      </p>

      <p>
        For comments or suggestions, email me at:{' '}
        <a href="mailto:FoxJonathanP@gmail.com">FoxJonathanP@gmail.com</a>
      </p>

      <div style={{ height: '8px' }} />
    </div>
  )
}

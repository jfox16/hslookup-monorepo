
import FilterListIcon from '@mui/icons-material/FilterList';

import IconButton from 'components/IconButton'
import { useLookupContext } from 'context/LookupContext/LookupContext';
import { DESKTOP_HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from 'globalConstants'
import headerLogo from 'img/logos/header-logo.svg'

import './Header.css'

export const Header = () => {

  const { isMobile, setFilterFormOpen } = useLookupContext();

  return (
    <div
      className="Header"
      style={{
        height: isMobile ? MOBILE_HEADER_HEIGHT : DESKTOP_HEADER_HEIGHT
      }}
    >
      <img src={headerLogo} alt="HS Lookup" className="HeaderLogo" />
      {isMobile && (
        <IconButton onClick={() => setFilterFormOpen(true)}>
          <FilterListIcon />
        </IconButton>
      )}
    </div>
  )
}

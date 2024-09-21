
import SimpleBar from 'simplebar-react'

import { FilterForm } from 'components/FilterForm/FilterForm';
import { DESKTOP_HEADER_HEIGHT, SIDEBAR_WIDTH } from 'globalConstants'

import './Sidebar.css'

export const Sidebar = () => {
  return (
    <div
      className="sidebar"
      style={{
        marginTop: DESKTOP_HEADER_HEIGHT,
        width: SIDEBAR_WIDTH
      }}
    >
      <SimpleBar autoHide={true} style={{ height: '100%', padding: '0 8px', overflow: 'auto' }}>
        <FilterForm />
      </SimpleBar>
    </div>
  )
}

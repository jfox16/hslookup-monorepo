import React from 'react'
import SimpleBar from 'simplebar-react'
import { CgClose } from 'react-icons/cg'

import IconButton from 'components/IconButton'

import './MobileFilterForm.css'
import { useLookupContext } from 'context/LookupContext/LookupContext'
import { FilterForm } from 'components/FilterForm/FilterForm'
import { Button } from 'components/Button/Button'

export const MobileFilterForm = () => {
  const { filteredCards, setFilterFormOpen } = useLookupContext();

  return (
    <div className="MobileFilterForm fullscreen">
      <div className="MobileFilterHeader">
        {/* Load-bearing div */}
        <div />
        <IconButton onClick={() => setFilterFormOpen(false)}>
          <CgClose />
        </IconButton>
      </div>
      <div className="MobileFilterContent">
        <SimpleBar style={{ height: '100%', padding: '0 8px' }}>
          <FilterForm />
        </SimpleBar>
      </div>
      <div className="MobileFilterFooter">
        <Button
          onClick={() => setFilterFormOpen(false)}
          style={{ width: 300 }}
        >
          VIEW {filteredCards.length} CARDS
        </Button>
      </div>
    </div>
  )
}


import { FixedBackground } from 'components/FixedBackground/FixedBackground'
import { Header } from 'components/Header/Header'
import { LookupContextProvider } from 'context/LookupContext/LookupContext'

import './Lookup.css'
import { LookupContent } from './LookupPageContent';

export const Lookup = () => {
  return (
    <LookupContextProvider>
      <div className="Main">
        <FixedBackground />
        <Header />
        <LookupContent />
      </div>
    </LookupContextProvider>
  )
}

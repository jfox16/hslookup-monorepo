
import { FixedBackground } from 'components/FixedBackground/FixedBackground'
import { Header } from 'components/Header/Header'
import { LookupContextProvider } from 'context/LookupContext/LookupContext'

import { LookupContent } from './LookupPageContent';

import './Lookup.css'

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

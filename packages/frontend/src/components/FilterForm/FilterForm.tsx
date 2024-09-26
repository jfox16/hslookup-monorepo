import { Skeleton } from '@mui/material';

import { useLookupContext } from 'context/LookupContext/LookupContext'

import { CardSetFilter } from './fields/CardSetFilter';
import { ClassFilter } from './fields/ClassFilter/ClassFilter';
import { NumericFilterGroup } from './fields/NumericFilterGroup/NumericFilterGroup';
import { CardTypeFilter } from './fields/CardTypeFilter';
import { RarityFilter } from './fields/RarityFilter';
import { MinionTypeFilter } from './fields/MinionTypeFilter';
import { SpellSchoolFilter } from './fields/SpellSchoolFilter';
import { KeywordFilter } from './fields/KeywordFilter';
import { Footer } from './shared/Footer/Footer';

import { Header } from './Header';

import './FilterForm.css'
import { TextFilter } from './fields/TextFilter';

export const FilterForm = () => {
  const { isLoading } = useLookupContext();

  if (isLoading) {
    return (
      <div className="filter-form">
        {(new Array(10)).map((_, i) => (
          <div key={i} style={{ marginTop: 10, marginBottom: 10 }}>
            <Skeleton height={60} />
            Loading
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="filter-form">
      <Header style={{ marginBottom: 8 }} />
      <TextFilter />
      <CardSetFilter />
      <CardTypeFilter />
      <ClassFilter />
      <NumericFilterGroup />
      <KeywordFilter />
      <RarityFilter />
      <MinionTypeFilter />
      <SpellSchoolFilter />
      <Footer />
    </div>
  )
}

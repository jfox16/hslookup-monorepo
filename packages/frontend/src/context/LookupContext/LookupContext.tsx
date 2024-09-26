import _ from 'lodash';
import { ReactNode, createContext, useState, useContext, useEffect, useMemo, useCallback } from 'react';

// import { generateTables } from 'functions/dataGeneration';
import { fetchCardData } from 'functions/fetchCardData';
import { DEBOUNCE_DELAY } from 'globalConstants';
import { Metadata } from 'types/metadataTypes';
import { LookupFilter } from 'types/filterTypes';
import { useDebouncedEffect } from 'utils/useDebouncedEffect';
import { Card } from 'types/cardTypes';
import { filterCards } from 'functions/filterCards';
// import { generateFilterDescription } from 'functions/generateFilterDescription';
import { useMedia } from 'react-use';

const DEFAULT_FILTER: LookupFilter = {
  classIds: new Set(),
  cardSetId: 'standard',
  cardTypeId: 4, // Minion
}

const DEFAULT_METADATA: Metadata = {
  cardSets: [],
  classes: [],
  keywords: [],
  minionTypes: [],
  rarities: [],
  spellSchools: [],
  types: [],

  attackOptions: new Set(),
  healthOptions: new Set(),
  manaCostOptions: new Set(),

  standardSetIds: new Set(),
}

const useLookupContextValue = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [metadata, setMetadata] = useState<Metadata>(DEFAULT_METADATA);
  const [filter, setFilter] = useState(DEFAULT_FILTER);
  const [filterFormOpen, setFilterFormOpen] = useState(false);
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [isFilterChanged, setIsFilterChanged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCardData()
      .then(cardData => {
        console.info('Fetched cardData:', cardData)
        if (cardData) {
          setCards(cardData.cards);
          setMetadata(cardData.metadata);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [])

  useEffect(() => {
    const nextIsChanged = !_.isEqual(filter, DEFAULT_FILTER);
    setIsFilterChanged(nextIsChanged);
  }, [
    filter
  ]);

  const filterDescription = useMemo(() => {
    // return generateFilterDescription(filter, metadata);
    return '';
  }, [
    // filter
  ]);

  useDebouncedEffect(() => {
    filterCards(cards, metadata, filter)
        .then(result => setFilteredCards(result));
    },
    [ cards, filter, metadata ],
    DEBOUNCE_DELAY,
  );

  // When data changes, generate markdown tables
  // useEffect(() => {
  //   if (data) {
  //     generateTables(data.metadata, data.cardData);
  //   }
  // }, [data]);

  const setFilterValue = useCallback(<K extends keyof LookupFilter>(key: K, value: LookupFilter[K]) => {
    const newFilter = {
      ...filter,
      [key]: value
    };
    setFilter(newFilter);
  }, [
    filter,
    setFilter
  ]);

  const clearFilters = useCallback(() => {
    setFilter(DEFAULT_FILTER);
  }, [
    setFilter
  ]);

  const toggleClassId = useCallback((classId: number) => {
    const newClassIds = new Set(filter.classIds);

    if (newClassIds.has(classId)) {
      newClassIds.delete(classId);
    }
    else {
      newClassIds.add(classId);
    }

    setFilter({
      ...filter,
      classIds: newClassIds,
    })
  }, [
    filter
  ]);

  const isMobile = useMedia('(max-width: 800px)');

  return useMemo(() => ({
    cards,
    filter,
    setFilter,
    setFilterValue,
    clearFilters,
    toggleClassId,
    filterDescription,
    filterFormOpen,
    setFilterFormOpen,
    filteredCards,
    setFilteredCards,
    isFilterChanged,
    isLoading,
    isMobile,
    metadata,
    setMetadata,
    selectedCard,
    setSelectedCard
  }), [
    cards,
    metadata,
    filter,
    setFilter,
    setFilterValue,
    clearFilters,
    toggleClassId,
    filterDescription,
    filterFormOpen,
    setFilterFormOpen,
    filteredCards,
    setFilteredCards,
    isFilterChanged,
    isLoading,
    isMobile,
    selectedCard,
    setSelectedCard
  ]);
}

const LookupContext = createContext<ReturnType<typeof useLookupContextValue>|undefined>(undefined);

export const LookupContextProvider = ({ children }: { children: ReactNode }) => {
  const contextValue = useLookupContextValue();

  return (
    <LookupContext.Provider value={contextValue}>
      {children}
    </LookupContext.Provider>
  );
};

export const useLookupContext = () => {
  const context = useContext(LookupContext);
  if (context === undefined) {
    throw new Error('useLookupContext must be used within a LookupProvider');
  }
  return context;
};
